"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const knex_1 = require("../../../database/knex");
const Card_1 = require("../../card/models/Card");
class Board extends knex_1.ObjectionModel {
    static get tableName() {
        return 'boards';
    }
    static get relationMappings() {
        return {
            cards: {
                relation: knex_1.ObjectionModel.HasManyRelation,
                modelClass: Card_1.Card,
                join: {
                    from: 'boards.id',
                    to: 'cards.board_id',
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
exports.Board = Board;
//# sourceMappingURL=Board.js.map