"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalErrorHandlerMiddleware = void 0;
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
let GlobalErrorHandlerMiddleware = class GlobalErrorHandlerMiddleware {
    async error(err, req, res, next) {
        if (err instanceof routing_controllers_1.HttpError) {
            res.status(err.httpCode).json({
                error: {
                    code: res.statusCode,
                    errorName: err.name,
                    message: err.message,
                    details: [],
                },
            });
        }
        if (err.name === 'ValidationError') {
            res.status(400).json({
                error: {
                    code: res.statusCode,
                    errorName: 'ValidationError',
                    message: 'Validation Exception',
                    details: err['details'].map((d) => d.message),
                },
            });
        }
        await next(err);
    }
};
exports.GlobalErrorHandlerMiddleware = GlobalErrorHandlerMiddleware;
exports.GlobalErrorHandlerMiddleware = GlobalErrorHandlerMiddleware = __decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.Middleware)({ type: 'after' })
], GlobalErrorHandlerMiddleware);
//# sourceMappingURL=global.error-handler.js.map