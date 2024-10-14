"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardService = void 0;
const typedi_1 = require("typedi");
const card_1 = require("../repositories/card");
const Card_1 = require("../models/Card");
const routing_controllers_1 = require("routing-controllers");
let CardService = class CardService {
    async getById(id, fields = ['*'], trx) {
        const card = await this.cardRepository.getById(id, fields, trx);
        if (!card) {
            throw new routing_controllers_1.NotFoundError('Block not found.');
        }
        return card;
    }
    async getAllByBoardId(boardId) {
        return this.cardRepository.getAllByBoardId(boardId);
    }
    async getAllByStatusId(statusId) {
        return this.cardRepository.getAllByStatusId(statusId);
    }
    async create(data) {
        const cards = await this.getAllByStatusId(data.status_id);
        const newPos = cards.map((c) => c.position).reduce((acc, cur, idx) => (acc = idx), 0) + 2;
        return this.cardRepository.create({ ...data, position: newPos });
    }
    async reorder(data) {
        const { sourceCardId, moveTo } = data;
        if (sourceCardId === moveTo.targetCardId) {
            return { status: false };
        }
        return Card_1.Card.transaction(async (trx) => {
            const [origCard, targetCard] = await Promise.all([
                this.getById(sourceCardId, ['position', 'status_id'], trx),
                this.getById(moveTo.targetCardId, ['position', 'status_id'], trx),
            ]);
            const newPos = moveTo.position === 'top' ? targetCard.position + 1 : targetCard.position;
            await this.updateById(sourceCardId, {
                status_id: targetCard.status_id,
                position: newPos,
            });
            await this.cardRepository.recalculatePositionsInStatusColumn(targetCard.status_id, trx);
            if (origCard.status_id !== targetCard.status_id) {
                await this.cardRepository.recalculatePositionsInStatusColumn(origCard.status_id, trx);
            }
            return { status: true };
        });
    }
    async dragAndDrop(cardId, statusId) {
        const card = await this.getById(cardId);
        const statusCards = await this.getAllByStatusId(statusId);
        return this.updateById(cardId, {
            ...card,
            status_id: statusId,
            position: statusCards.length + 1,
        });
    }
    async updateById(id, data) {
        return this.cardRepository.updateById(id, data);
    }
    async deleteById(id) {
        const result = await this.cardRepository.deleteById(id);
        return { status: result === 1 };
    }
};
exports.CardService = CardService;
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", card_1.CardRepository)
], CardService.prototype, "cardRepository", void 0);
exports.CardService = CardService = __decorate([
    (0, typedi_1.Service)()
], CardService);
//# sourceMappingURL=card.js.map