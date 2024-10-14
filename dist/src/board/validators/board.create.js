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
        name: joi_1.default.string().required(),
    })
        .required(),
};
//# sourceMappingURL=board.create.js.map