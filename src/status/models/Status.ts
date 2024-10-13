import { ObjectionModel } from '../../../database/knex';
import { Card } from '../../card/models/Card';
import { IStatus } from '../interfaces/status';

export class Status extends ObjectionModel implements IStatus {
  id?: string;
  name: string;
  created_at?: string;
  updated_at?: string;

  static get tableName(): string {
    return 'statuses';
  }

  static get relationMappings() {
    return {
      cards: {
        relation: ObjectionModel.HasManyRelation,
        modelClass: Card,
        join: {
          from: 'statuses.id',
          to: 'cards.status_id',
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
