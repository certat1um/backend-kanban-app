import { Inject, Service } from 'typedi';
import { FullBoardData, IBoard } from '../interfaces/board';
import { BoardRepository } from '../repositories/board';
import { NotFoundError } from 'routing-controllers';
import { Board } from '../models/Board';
import { CardService } from '../../card/services/card';
import { StatusService } from '../../status/services/status';
import { CardRepository } from '../../card/repositories/card';

@Service()
export class BoardService {
  @Inject() private boardRepository: BoardRepository;
  @Inject() private cardRepository: CardRepository;
  @Inject() private cardService: CardService;
  @Inject() private statusService: StatusService;

  public async getFullData(id: string): Promise<FullBoardData> {
    const board = await this.boardRepository.getById(id);
    if (!board) {
      throw new NotFoundError('Board not found.');
    }

    const statuses = await this.statusService.getAll();
    const cards = await this.cardService.getAllByBoardId(board.id);
    const cardsByStatus = [];

    statuses.forEach((s) =>
      cardsByStatus.push({
        id: s.id,
        name: s.name,
        cards: cards.filter((c) => c.status_id === s.id),
      }),
    );

    return { ...board, statuses: cardsByStatus };
  }

  public async create(data: IBoard): Promise<FullBoardData> {
    const board = await this.boardRepository.create(data);
    const statuses = await this.statusService.getAll();
    const cardsByStatus = [];

    statuses.forEach((s) =>
      cardsByStatus.push({
        id: s.id,
        name: s.name,
        cards: [],
      }),
    );

    return { ...board, statuses: cardsByStatus };
  }

  public async updateById(id: string, data: Partial<IBoard>): Promise<Board> {
    return this.boardRepository.updateById(id, data);
  }

  public async deleteById(id: string): Promise<{ status: boolean }> {
    await this.cardRepository.deleteByboardId(id);
    const result = await this.boardRepository.deleteById(id);

    return { status: result === 1 };
  }
}
