import { ObjectionModel } from '../../../database/knex';
import { Card } from '../../card/models/Card';
import { IBoard } from '../interfaces/board';

export class Board extends ObjectionModel implements IBoard {
  id: string;
  name: string;
  created_at?: string;
  updated_at?: string;

  static get tableName(): string {
    return 'boards';
  }

  static get relationMappings() {
    return {
      cards: {
        relation: ObjectionModel.HasManyRelation,
        modelClass: Card,
        join: {
          from: 'boards.id',
          to: 'cards.board_id',
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
