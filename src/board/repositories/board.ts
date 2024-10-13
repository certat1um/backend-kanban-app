import { Service } from 'typedi';
import { IBoard } from '../interfaces/board';
import { Board } from '../models/Board';

@Service()
export class BoardRepository {
  public async getById(id: string): Promise<Board> {
    return Board.query().findById(id);
  }

  public async create(data: IBoard): Promise<Board> {
    return Board.query().insertAndFetch(data);
  }

  public async updateById(id: string, data: Partial<IBoard>): Promise<Board> {
    return Board.query().updateAndFetchById(id, data);
  }

  public async deleteById(id: string): Promise<number> {
    return Board.query().deleteById(id);
  }
}
