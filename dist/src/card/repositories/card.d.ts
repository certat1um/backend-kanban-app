import { ICard } from '../interfaces/card';
import { Card } from '../models/Card';
import { Knex } from 'knex';
export declare class CardRepository {
    getById(id: string, fields: string[], trx?: Knex.Transaction): Promise<Card>;
    getAllByBoardId(boardId: string): Promise<Card[]>;
    getAllByStatusId(statusId: string): Promise<Card[]>;
    create(data: ICard): Promise<Card>;
    updateById(id: string, data: Partial<ICard>, trx?: Knex.Transaction): Promise<Card>;
    recalculatePositionsInStatusColumn(statusId: string, trx?: Knex.Transaction): Promise<void>;
    deleteById(id: string): Promise<number>;
    deleteByboardId(boardId: string): Promise<number>;
}
