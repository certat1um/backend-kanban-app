import { IBoard } from '../interfaces/board';
import { Board } from '../models/Board';
export declare class BoardRepository {
    getById(id: string): Promise<Board>;
    create(data: IBoard): Promise<Board>;
    updateById(id: string, data: Partial<IBoard>): Promise<Board>;
    deleteById(id: string): Promise<number>;
}
