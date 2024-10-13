import request from 'supertest';
import { appInstance } from '../../main';
import { knex } from '../../../database/knex';

describe('CardController', () => {
  beforeAll(async () => {
    await knex.migrate.latest();
  });

  beforeEach(async () => {
    await knex.seed.run();
  });

  it('create', async () => {
    const cardData = {
      title: 'Test Card 1',
      status_id: '5f18a740-6337-4422-a3ad-0fb404146721',
      board_id: '5f18a740-6337-4422-a3ad-0fb404146711',
    };
    const res = await request(appInstance).post(`/api/cards/create`).send(cardData);

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      ...cardData,
    });
  });

  it('updateById', async () => {
    const id = '5f18a740-6337-4422-a3ad-0fb404146731';
    const data = { title: 'edited Kanban test board' };
    const res = await request(appInstance).put(`/api/cards/${id}`).send(data);

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      id,
      ...data,
    });
  });

  it('dragAndDrop', async () => {
    const id = '5f18a740-6337-4422-a3ad-0fb404146731';
    const data = { status_id: '5f18a740-6337-4422-a3ad-0fb404146721' };
    const res = await request(appInstance).put(`/api/cards/${id}`).send(data);

    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      id,
      title: expect.any(String),
      ...data,
    });
  });

  it('deleteById', async () => {
    const id = '5f18a740-6337-4422-a3ad-0fb404146731';
    const res = await request(appInstance).delete(`/api/cards/${id}`);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: true });
  });
});
