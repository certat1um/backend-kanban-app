import { ObjectionModel } from '../../../database/knex';
import { Board } from '../../board/models/Board';
import { Status } from '../../status/models/Status';
import { ICard } from '../interfaces/card';

export class Card extends ObjectionModel implements ICard {
  id?: string;
  title: string;
  description: string | null;
  position: number;
  status_id: string;
  board_id: string;
  created_at?: string;
  updated_at?: string;

  static get tableName(): string {
    return 'cards';
  }

  static get relationMappings() {
    return {
      board: {
        relation: ObjectionModel.BelongsToOneRelation,
        modelClass: Board,
        join: {
          from: 'cards.board_id',
          to: 'boards.id',
        },
      },
      status: {
        relation: ObjectionModel.BelongsToOneRelation,
        modelClass: Status,
        join: {
          from: 'cards.status_id',
          to: 'statuses.id',
        },
      },
    };
  }

  $beforeInsert(): void {
    this.created_at = new Date().toISOString();
  }
  $beforeUpdate(): void {
    this.updated_at = new Date().toISOString();
  }
}
