"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const main_1 = require("../../main");
const knex_1 = require("../../../database/knex");
describe('BoardController', () => {
    beforeAll(async () => {
        await knex_1.knex.migrate.latest();
    });
    beforeEach(async () => {
        await knex_1.knex.seed.run();
    });
    it('getById', async () => {
        const boardId = '5f18a740-6337-4422-a3ad-0fb404146711';
        const res = await (0, supertest_1.default)(main_1.appInstance).get(`/api/boards/${boardId}`);
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({
            id: boardId,
            name: 'Kanban Test Board 1',
            statuses: expect.arrayContaining([]),
        });
    });
    it('create', async () => {
        const boardName = 'Kanban test board';
        const res = await (0, supertest_1.default)(main_1.appInstance).post(`/api/boards/create`).send({ name: boardName });
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({
            id: expect.any(String),
            name: boardName,
            statuses: expect.arrayContaining([]),
        });
    });
    it('updateById', async () => {
        const boardId = '5f18a740-6337-4422-a3ad-0fb404146711';
        const boardName = 'edited Kanban test board';
        const res = await (0, supertest_1.default)(main_1.appInstance).put(`/api/boards/${boardId}`).send({ name: boardName });
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({
            id: boardId,
            name: boardName,
        });
    });
    it('deleteById', async () => {
        const boardId = '5f18a740-6337-4422-a3ad-0fb404146711';
        const res = await (0, supertest_1.default)(main_1.appInstance).delete(`/api/boards/${boardId}`);
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ status: true });
    });
});
//# sourceMappingURL=board.spec.js.map