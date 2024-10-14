"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const main_1 = require("../../main");
const knex_1 = require("../../../database/knex");
describe('CardController', () => {
    beforeAll(async () => {
        await knex_1.knex.migrate.latest();
    });
    beforeEach(async () => {
        await knex_1.knex.seed.run();
    });
    it('create', async () => {
        const cardData = {
            title: 'Test Card 1',
            status_id: '5f18a740-6337-4422-a3ad-0fb404146721',
            board_id: '5f18a740-6337-4422-a3ad-0fb404146711',
        };
        const res = await (0, supertest_1.default)(main_1.appInstance).post(`/api/cards/create`).send(cardData);
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({
            ...cardData,
        });
    });
    it('updateById', async () => {
        const id = '5f18a740-6337-4422-a3ad-0fb404146731';
        const data = { title: 'edited Kanban test board' };
        const res = await (0, supertest_1.default)(main_1.appInstance).put(`/api/cards/${id}`).send(data);
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({
            id,
            ...data,
        });
    });
    it('dragAndDrop', async () => {
        const id = '5f18a740-6337-4422-a3ad-0fb404146731';
        const data = { status_id: '5f18a740-6337-4422-a3ad-0fb404146721' };
        const res = await (0, supertest_1.default)(main_1.appInstance).put(`/api/cards/${id}`).send(data);
        expect(res.status).toBe(200);
        expect(res.body).toMatchObject({
            id,
            title: expect.any(String),
            ...data,
        });
    });
    it('deleteById', async () => {
        const id = '5f18a740-6337-4422-a3ad-0fb404146731';
        const res = await (0, supertest_1.default)(main_1.appInstance).delete(`/api/cards/${id}`);
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ status: true });
    });
});
//# sourceMappingURL=card.spec.js.map