"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllByBoardId = void 0;
const joi_1 = __importDefault(require("joi"));
exports.getAllByBoardId = {
    params: {
        boardId: joi_1.default.string().uuid({ version: 'uuidv4' }).required(),
    },
};
//# sourceMappingURL=card.getAllByBoardId.js.map