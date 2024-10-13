import request from 'supertest';
import { appInstance } from '../../main';
import { knex } from '../../../database/knex';

describe('BoardController', () => {
  beforeAll(async () => {
    await knex.migrate.latest();
  });

  beforeEach(async () => {
    await knex.seed.run();
  });

  it('getById', async () => {
    const boardId = '5f18a740-6337-4422-a3ad-0fb404146711';
    const res = await request(appInstance).get(`/api/boards/${boardId}`);

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      id: boardId,
      name: 'Kanban Test Board 1',
      statuses: expect.arrayContaining([]),
    });
  });

  it('create', async () => {
    const boardName = 'Kanban test board';
    const res = await request(appInstance).post(`/api/boards/create`).send({ name: boardName });

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
    const res = await request(appInstance).put(`/api/boards/${boardId}`).send({ name: boardName });

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      id: boardId,
      name: boardName,
    });
  });

  it('deleteById', async () => {
    const boardId = '5f18a740-6337-4422-a3ad-0fb404146711';
    const res = await request(appInstance).delete(`/api/boards/${boardId}`);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: true });
  });
});
