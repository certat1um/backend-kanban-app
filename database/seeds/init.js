/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('cards').del();
  await knex('statuses').del();
  await knex('boards').del();

  await knex('boards').insert([
    { id: '5f18a740-6337-4422-a3ad-0fb404146711', name: 'Kanban Test Board 1' },
    { id: '5f18a740-6337-4422-a3ad-0fb404146712', name: 'Kanban Test Board 2' },
  ]);
  await knex('statuses').insert([
    { id: '5f18a740-6337-4422-a3ad-0fb404146721', name: 'To Do' },
    { id: '5f18a740-6337-4422-a3ad-0fb404146722', name: 'In Progress' },
    { id: '5f18a740-6337-4422-a3ad-0fb404146723', name: 'Done' },
  ]);
  await knex('cards').insert([
    {
      id: '5f18a740-6337-4422-a3ad-0fb404146731',
      title: 'Test Card 1',
      position: 1,
      status_id: '5f18a740-6337-4422-a3ad-0fb404146721',
      board_id: '5f18a740-6337-4422-a3ad-0fb404146711',
    },
    {
      id: '5f18a740-6337-4422-a3ad-0fb404146734',
      title: 'Test Card 2',
      position: 2,
      status_id: '5f18a740-6337-4422-a3ad-0fb404146721',
      board_id: '5f18a740-6337-4422-a3ad-0fb404146711',
    },
    {
      id: '5f18a740-6337-4422-a3ad-0fb404146732',
      title: 'Test Card 2',
      position: 1,
      status_id: '5f18a740-6337-4422-a3ad-0fb404146722',
      board_id: '5f18a740-6337-4422-a3ad-0fb404146711',
    },
    {
      id: '5f18a740-6337-4422-a3ad-0fb404146733',
      title: 'Test Card 3',
      position: 1,
      status_id: '5f18a740-6337-4422-a3ad-0fb404146723',
      board_id: '5f18a740-6337-4422-a3ad-0fb404146711',
    },
  ]);
};
