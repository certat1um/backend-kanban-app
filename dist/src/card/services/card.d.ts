import { ReorderBody, ICard } from '../interfaces/card';
import { Card } from '../models/Card';
import { Knex } from 'knex';
export declare class CardService {
    private cardRepository;
    getById(id: string, fields?: string[], trx?: Knex.Transaction): Promise<Card>;
    getAllByBoardId(boardId: string): Promise<Card[]>;
    getAllByStatusId(statusId: string): Promise<Card[]>;
    create(data: ICard): Promise<Card>;
    reorder(data: ReorderBody): Promise<{
        status: boolean;
    }>;
    dragAndDrop(cardId: string, statusId: string): Promise<Card>;
    updateById(id: string, data: Partial<ICard>): Promise<Card>;
    deleteById(id: string): Promise<{
        status: boolean;
    }>;
}
