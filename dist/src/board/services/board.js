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
exports.BoardService = void 0;
const typedi_1 = require("typedi");
const board_1 = require("../repositories/board");
const routing_controllers_1 = require("routing-controllers");
const card_1 = require("../../card/services/card");
const status_1 = require("../../status/services/status");
const card_2 = require("../../card/repositories/card");
let BoardService = class BoardService {
    async getFullData(id) {
        const board = await this.boardRepository.getById(id);
        if (!board) {
            throw new routing_controllers_1.NotFoundError('Board not found.');
        }
        const statuses = await this.statusService.getAll();
        const cards = await this.cardService.getAllByBoardId(board.id);
        const cardsByStatus = [];
        statuses.forEach((s) => cardsByStatus.push({
            id: s.id,
            name: s.name,
            cards: cards.filter((c) => c.status_id === s.id),
        }));
        return { ...board, statuses: cardsByStatus };
    }
    async create(data) {
        const board = await this.boardRepository.create(data);
        const statuses = await this.statusService.getAll();
        const cardsByStatus = [];
        statuses.forEach((s) => cardsByStatus.push({
            id: s.id,
            name: s.name,
            cards: [],
        }));
        return { ...board, statuses: cardsByStatus };
    }
    async updateById(id, data) {
        return this.boardRepository.updateById(id, data);
    }
    async deleteById(id) {
        await this.cardRepository.deleteByboardId(id);
        const result = await this.boardRepository.deleteById(id);
        return { status: result === 1 };
    }
};
exports.BoardService = BoardService;
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", board_1.BoardRepository)
], BoardService.prototype, "boardRepository", void 0);
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", card_2.CardRepository)
], BoardService.prototype, "cardRepository", void 0);
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", card_1.CardService)
], BoardService.prototype, "cardService", void 0);
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", status_1.StatusService)
], BoardService.prototype, "statusService", void 0);
exports.BoardService = BoardService = __decorate([
    (0, typedi_1.Service)()
], BoardService);
//# sourceMappingURL=board.js.map