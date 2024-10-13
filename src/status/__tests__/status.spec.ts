import request from 'supertest';
import { appInstance } from '../../main';
import { knex } from '../../../database/knex';

describe('StatusController', () => {
  beforeAll(async () => {
    await knex.migrate.latest();
  });

  beforeEach(async () => {
    await knex.seed.run();
  });

  it('getAll', async () => {
    const res = await request(appInstance).get(`/api/statuses`);

    expect(res.status).toBe(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(String),
          name: expect.any(String),
          created_at: expect.any(String),
          updated_at: expect.any(String),
        },
      ]),
    );
  });
});
