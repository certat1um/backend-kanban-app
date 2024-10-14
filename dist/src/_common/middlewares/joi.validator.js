"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const joi_1 = __importDefault(require("joi"));
const lodash_1 = __importDefault(require("lodash"));
const validate = (schema) => {
    return async (req, res, next) => {
        try {
            const incomeEventObj = lodash_1.default.pick(req, ...Object.keys(schema));
            const validatedObject = await joi_1.default.object(schema).validateAsync(incomeEventObj, {
                abortEarly: false,
            });
            req = lodash_1.default.merge({}, req, validatedObject);
            next();
        }
        catch (e) {
            next(e);
        }
    };
};
exports.validate = validate;
//# sourceMappingURL=joi.validator.js.map