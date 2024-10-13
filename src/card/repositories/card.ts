import { Service } from 'typedi';
import { ICard } from '../interfaces/card';
import { Card } from '../models/Card';
import { Knex } from 'knex';

@Service()
export class CardRepository {
  public async getById(id: string, fields: string[], trx?: Knex.Transaction): Promise<Card> {
    return Card.query(trx)
      .select(...fields)
      .findById(id);
  }

  public async getAllByBoardId(boardId: string): Promise<Card[]> {
    return Card.query().where({ board_id: boardId }).orderBy('position', 'desc');
  }

  public async getAllByStatusId(statusId: string): Promise<Card[]> {
    return Card.query().where({ status_id: statusId }).orderBy('position', 'desc');
  }

  public async create(data: ICard): Promise<Card> {
    return Card.query().insertAndFetch(data);
  }

  public async updateById(id: string, data: Partial<ICard>, trx?: Knex.Transaction): Promise<Card> {
    return Card.query(trx).updateAndFetchById(id, data);
  }

  public async recalculatePositionsInStatusColumn(
    statusId: string,
    trx?: Knex.Transaction,
  ): Promise<void> {
    const cardsInColumn = await Card.query(trx)
      .where('status_id', statusId)
      .orderBy('position', 'desc');

    let curPos = cardsInColumn.length;
    for (const card of cardsInColumn) {
      await card.$query(trx).patch({ position: curPos });
      curPos--;
    }
  }

  public async deleteById(id: string): Promise<number> {
    return Card.query().deleteById(id);
  }

  public async deleteByboardId(boardId: string): Promise<number> {
    return await Card.transaction(async (trx) => {
      return await Card.query(trx).where({ board_id: boardId }).delete();
    });
  }
}
