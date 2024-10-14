"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const joi_1 = __importDefault(require("joi"));
exports.create = {
    body: joi_1.default.object()
        .keys({
        id: joi_1.default.string().uuid({ version: 'uuidv4' }),
        title: joi_1.default.string().required(),
        description: joi_1.default.string().min(0),
        position: joi_1.default.number(),
        status_id: joi_1.default.string().uuid({ version: 'uuidv4' }).required(),
        board_id: joi_1.default.string().uuid({ version: 'uuidv4' }).required(),
    })
        .required(),
};
//# sourceMappingURL=card.create.js.map