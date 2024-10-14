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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardController = void 0;
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const board_1 = require("../services/board");
const joi_validator_1 = require("../../_common/middlewares/joi.validator");
const validators_1 = require("../validators");
let BoardController = class BoardController {
    async getById(id) {
        return this.boardService.getFullData(id);
    }
    async create(data) {
        return this.boardService.create(data);
    }
    async updateById(id, data) {
        return this.boardService.updateById(id, data);
    }
    async deleteById(id) {
        return this.boardService.deleteById(id);
    }
};
exports.BoardController = BoardController;
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", board_1.BoardService)
], BoardController.prototype, "boardService", void 0);
__decorate([
    (0, routing_controllers_1.Get)('/:id'),
    (0, routing_controllers_1.UseBefore)((0, joi_validator_1.validate)(validators_1.getById)),
    __param(0, (0, routing_controllers_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getById", null);
__decorate([
    (0, routing_controllers_1.Post)('/create'),
    (0, routing_controllers_1.UseBefore)((0, joi_validator_1.validate)(validators_1.create)),
    __param(0, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "create", null);
__decorate([
    (0, routing_controllers_1.Put)('/:id'),
    (0, routing_controllers_1.UseBefore)((0, joi_validator_1.validate)(validators_1.updateById)),
    __param(0, (0, routing_controllers_1.Param)('id')),
    __param(1, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "updateById", null);
__decorate([
    (0, routing_controllers_1.Delete)('/:id'),
    (0, routing_controllers_1.UseBefore)((0, joi_validator_1.validate)(validators_1.deleteById)),
    __param(0, (0, routing_controllers_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "deleteById", null);
exports.BoardController = BoardController = __decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.JsonController)('/boards')
], BoardController);
//# sourceMappingURL=board.js.map