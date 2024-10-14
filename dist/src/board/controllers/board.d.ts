import { FullBoardData, IBoard } from '../interfaces/board';
import { Board } from '../models/Board';
export declare class BoardController {
    private boardService;
    getById(id: string): Promise<FullBoardData>;
    create(data: IBoard): Promise<FullBoardData>;
    updateById(id: string, data: Partial<IBoard>): Promise<Board>;
    deleteById(id: string): Promise<{
        status: boolean;
    }>;
}
