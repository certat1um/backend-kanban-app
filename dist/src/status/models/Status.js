"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const knex_1 = require("../../../database/knex");
const Card_1 = require("../../card/models/Card");
class Status extends knex_1.ObjectionModel {
    static get tableName() {
        return 'statuses';
    }
    static get relationMappings() {
        return {
            cards: {
                relation: knex_1.ObjectionModel.HasManyRelation,
                modelClass: Card_1.Card,
                join: {
                    from: 'statuses.id',
                    to: 'cards.status_id',
                },
            },
        };
    }
    $beforeInsert() {
        this.created_at = new Date().toISOString();
    }
    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }
}
exports.Status = Status;
//# sourceMappingURL=Status.js.map