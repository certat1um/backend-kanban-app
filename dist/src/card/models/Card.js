"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const knex_1 = require("../../../database/knex");
const Board_1 = require("../../board/models/Board");
const Status_1 = require("../../status/models/Status");
class Card extends knex_1.ObjectionModel {
    static get tableName() {
        return 'cards';
    }
    static get relationMappings() {
        return {
            board: {
                relation: knex_1.ObjectionModel.BelongsToOneRelation,
                modelClass: Board_1.Board,
                join: {
                    from: 'cards.board_id',
                    to: 'boards.id',
                },
            },
            status: {
                relation: knex_1.ObjectionModel.BelongsToOneRelation,
                modelClass: Status_1.Status,
                join: {
                    from: 'cards.status_id',
                    to: 'statuses.id',
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
exports.Card = Card;
//# sourceMappingURL=Card.js.map