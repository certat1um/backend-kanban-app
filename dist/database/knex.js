"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkKnexConnection = exports.ObjectionModel = exports.knex = void 0;
const knex_1 = __importDefault(require("knex"));
const knexfile_js_1 = __importDefault(require("../knexfile.js"));
const objection_1 = require("objection");
Object.defineProperty(exports, "ObjectionModel", { enumerable: true, get: function () { return objection_1.Model; } });
let knex;
const environment = process.env.NODE_ENV || 'development';
console.log({ environment });
exports.knex = knex = (0, knex_1.default)(knexfile_js_1.default[environment]);
objection_1.Model.knex(knex);
const checkKnexConnection = async () => {
    return knex
        .raw('SELECT 1')
        .then(() => console.log('Database is connected'))
        .catch((err) => console.log('Failed connection to database: ' + err));
};
exports.checkKnexConnection = checkKnexConnection;
//# sourceMappingURL=knex.js.map