"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const main_1 = require("../../main");
const knex_1 = require("../../../database/knex");
describe('StatusController', () => {
    beforeAll(async () => {
        await knex_1.knex.migrate.latest();
    });
    beforeEach(async () => {
        await knex_1.knex.seed.run();
    });
    it('getAll', async () => {
        const res = await (0, supertest_1.default)(main_1.appInstance).get(`/api/statuses`);
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.arrayContaining([
            {
                id: expect.any(String),
                name: expect.any(String),
                created_at: expect.any(String),
                updated_at: expect.any(String),
            },
        ]));
    });
});
//# sourceMappingURL=status.spec.js.map