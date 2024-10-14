import { ObjectionModel } from '../../../database/knex';
import { Card } from '../../card/models/Card';
import { IBoard } from '../interfaces/board';
export declare class Board extends ObjectionModel implements IBoard {
    id: string;
    name: string;
    created_at?: string;
    updated_at?: string;
    static get tableName(): string;
    static get relationMappings(): {
        cards: {
            relation: import("objection").RelationType;
            modelClass: typeof Card;
            join: {
                from: string;
                to: string;
            };
        };
    };
    $beforeInsert(): void;
    $beforeUpdate(): void;
}
