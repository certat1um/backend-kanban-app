import { FullBoardData, IBoard } from '../interfaces/board';
import { Board } from '../models/Board';
export declare class BoardService {
    private boardRepository;
    private cardRepository;
    private cardService;
    private statusService;
    getFullData(id: string): Promise<FullBoardData>;
    create(data: IBoard): Promise<FullBoardData>;
    updateById(id: string, data: Partial<IBoard>): Promise<Board>;
    deleteById(id: string): Promise<{
        status: boolean;
    }>;
}
