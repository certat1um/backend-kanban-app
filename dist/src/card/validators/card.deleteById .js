"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = void 0;
const joi_1 = __importDefault(require("joi"));
exports.deleteById = {
    params: {
        id: joi_1.default.string().uuid({ version: 'uuidv4' }).required(),
    },
};
//# sourceMappingURL=card.deleteById%20.js.map