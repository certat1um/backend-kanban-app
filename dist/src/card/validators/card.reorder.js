"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reorder = void 0;
const joi_1 = __importDefault(require("joi"));
exports.reorder = {
    body: joi_1.default.object()
        .keys({
        sourceCardId: joi_1.default.string().uuid({ version: 'uuidv4' }).required(),
        moveTo: joi_1.default.object()
            .keys({
            targetCardId: joi_1.default.string().uuid({ version: 'uuidv4' }).required(),
            position: joi_1.default.string().valid('top', 'bottom').required(),
        })
            .required(),
    })
        .required(),
};
//# sourceMappingURL=card.reorder.js.map