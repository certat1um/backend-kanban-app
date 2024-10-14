import { ObjectionModel } from '../../../database/knex';
import { Board } from '../../board/models/Board';
import { Status } from '../../status/models/Status';
import { ICard } from '../interfaces/card';
export declare class Card extends ObjectionModel implements ICard {
    id?: string;
    title: string;
    description: string | null;
    position: number;
    status_id: string;
    board_id: string;
    created_at?: string;
    updated_at?: string;
    static get tableName(): string;
    static get relationMappings(): {
        board: {
            relation: import("objection").RelationType;
            modelClass: typeof Board;
            join: {
                from: string;
                to: string;
            };
        };
        status: {
            relation: import("objection").RelationType;
            modelClass: typeof Status;
            join: {
                from: string;
                to: string;
            };
        };
    };
    $beforeInsert(): void;
    $beforeUpdate(): void;
}
