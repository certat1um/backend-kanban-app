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
exports.StatusController = void 0;
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
const status_1 = require("../services/status");
let StatusController = class StatusController {
    async getAll() {
        return this.statusService.getAll();
    }
};
exports.StatusController = StatusController;
__decorate([
    (0, typedi_1.Inject)(),
    __metadata("design:type", status_1.StatusService)
], StatusController.prototype, "statusService", void 0);
__decorate([
    (0, routing_controllers_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "getAll", null);
exports.StatusController = StatusController = __decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.JsonController)('/statuses')
], StatusController);
//# sourceMappingURL=status.js.map