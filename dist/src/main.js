"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appInstance = void 0;
require("dotenv/config");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const body_parser_1 = __importDefault(require("body-parser"));
const knex_1 = require("../database/knex");
const board_1 = require("./board/controllers/board");
const global_error_handler_1 = require("./_common/middlewares/global.error-handler");
const card_1 = require("./card/controllers/card");
const cors_1 = __importDefault(require("cors"));
const status_1 = require("./status/controllers/status");
(0, routing_controllers_1.useContainer)(typedi_1.Container);
const app = (0, express_1.default)();
const corsOptions = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(corsOptions));
(0, routing_controllers_1.useExpressServer)(app, {
    routePrefix: '/api',
    controllers: [board_1.BoardController, status_1.StatusController, card_1.CardController],
    middlewares: [global_error_handler_1.GlobalErrorHandlerMiddleware],
    defaultErrorHandler: false,
});
const PORT = process.env.PORT || 3333;
const server = app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    (0, knex_1.checkKnexConnection)();
});
exports.appInstance = server;
//# sourceMappingURL=main.js.map