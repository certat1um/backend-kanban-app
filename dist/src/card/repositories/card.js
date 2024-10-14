"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardRepository = void 0;
const typedi_1 = require("typedi");
const Card_1 = require("../models/Card");
let CardRepository = class CardRepository {
    async getById(id, fields, trx) {
        return Card_1.Card.query(trx)
            .select(...fields)
            .findById(id);
    }
    async getAllByBoardId(boardId) {
        return Card_1.Card.query().where({ board_id: boardId }).orderBy('position', 'desc');
    }
    async getAllByStatusId(statusId) {
        return Card_1.Card.query().where({ status_id: statusId }).orderBy('position', 'desc');
    }
    async create(data) {
        return Card_1.Card.query().insertAndFetch(data);
    }
    async updateById(id, data, trx) {
        return Card_1.Card.query(trx).updateAndFetchById(id, data);
    }
    async recalculatePositionsInStatusColumn(statusId, trx) {
        const cardsInColumn = await Card_1.Card.query(trx)
            .where('status_id', statusId)
            .orderBy('position', 'desc');
        let curPos = cardsInColumn.length;
        for (const card of cardsInColumn) {
            await card.$query(trx).patch({ position: curPos });
            curPos--;
        }
    }
    async deleteById(id) {
        return Card_1.Card.query().deleteById(id);
    }
    async deleteByboardId(boardId) {
        return await Card_1.Card.transaction(async (trx) => {
            return await Card_1.Card.query(trx).where({ board_id: boardId }).delete();
        });
    }
};
exports.CardRepository = CardRepository;
exports.CardRepository = CardRepository = __decorate([
    (0, typedi_1.Service)()
], CardRepository);
//# sourceMappingURL=card.js.map