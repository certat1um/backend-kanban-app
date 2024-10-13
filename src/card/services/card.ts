import { Inject, Service } from 'typedi';
import { ReorderBody, ICard } from '../interfaces/card';
import { CardRepository } from '../repositories/card';
import { Card } from '../models/Card';
import { Knex } from 'knex';
import { NotFoundError } from 'routing-controllers';

@Service()
export class CardService {
  @Inject() private cardRepository: CardRepository;

  public async getById(
    id: string,
    fields: string[] = ['*'],
    trx?: Knex.Transaction,
  ): Promise<Card> {
    const card = await this.cardRepository.getById(id, fields, trx);
    if (!card) {
      throw new NotFoundError('Block not found.');
    }
    return card;
  }

  public async getAllByBoardId(boardId: string): Promise<Card[]> {
    return this.cardRepository.getAllByBoardId(boardId);
  }

  public async getAllByStatusId(statusId: string): Promise<Card[]> {
    return this.cardRepository.getAllByStatusId(statusId);
  }

  public async create(data: ICard): Promise<Card> {
    const cards = await this.getAllByStatusId(data.status_id);
    const newPos = cards.map((c) => c.position).reduce((acc, cur, idx) => (acc = idx), 0) + 2;

    return this.cardRepository.create({ ...data, position: newPos });
  }

  public async reorder(data: ReorderBody): Promise<{ status: boolean }> {
    const { sourceCardId, moveTo } = data;
    if (sourceCardId === moveTo.targetCardId) {
      return { status: false };
    }

    return Card.transaction(async (trx) => {
      const [origCard, targetCard] = await Promise.all([
        this.getById(sourceCardId, ['position', 'status_id'], trx),
        this.getById(moveTo.targetCardId, ['position', 'status_id'], trx),
      ]);

      // define new position for sourceCard
      const newPos = moveTo.position === 'top' ? targetCard.position + 1 : targetCard.position;

      // update sourceCard position
      await this.updateById(sourceCardId, {
        status_id: targetCard.status_id,
        position: newPos,
      });

      // update positions of targetCard status column
      await this.cardRepository.recalculatePositionsInStatusColumn(targetCard.status_id, trx);

      // update positions of sourceCard status column
      if (origCard.status_id !== targetCard.status_id) {
        await this.cardRepository.recalculatePositionsInStatusColumn(origCard.status_id, trx);
      }

      return { status: true };
    });
  }

  public async dragAndDrop(cardId: string, statusId: string): Promise<Card> {
    const card = await this.getById(cardId);
    const statusCards = await this.getAllByStatusId(statusId);

    return this.updateById(cardId, {
      ...card,
      status_id: statusId,
      position: statusCards.length + 1,
    });
  }

  public async updateById(id: string, data: Partial<ICard>): Promise<Card> {
    return this.cardRepository.updateById(id, data);
  }

  public async deleteById(id: string): Promise<{ status: boolean }> {
    const result = await this.cardRepository.deleteById(id);
    return { status: result === 1 };
  }
}
