import { ReorderBody, ICard } from '../interfaces/card';
import { Card } from '../models/Card';
export declare class CardController {
    private cardService;
    create(data: ICard): Promise<Card>;
    reorder(data: ReorderBody): Promise<{
        status: boolean;
    }>;
    updateById(id: string, data: Partial<ICard>): Promise<Card>;
    dragAndDrop(id: string, data: {
        status_id: string;
    }): Promise<Card>;
    deleteById(id: string): Promise<{
        status: boolean;
    }>;
}
