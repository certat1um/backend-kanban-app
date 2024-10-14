"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateById = void 0;
const joi_1 = __importDefault(require("joi"));
exports.updateById = {
    params: {
        id: joi_1.default.string().uuid({ version: 'uuidv4' }).required(),
    },
    body: joi_1.default.object()
        .keys({
        id: joi_1.default.string().uuid({ version: 'uuidv4' }),
        name: joi_1.default.string(),
    })
        .required(),
};
//# sourceMappingURL=board.updateById.js.map