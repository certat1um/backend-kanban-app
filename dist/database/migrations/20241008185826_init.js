"use strict";
exports.up = async (knex) => {
    await knex.schema.createTable('boards', (t) => {
        t.uuid('id').defaultTo(knex.raw('gen_random_uuid()')).primary();
        t.string('name').defaultTo('');
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
    });
    await knex.schema.createTable('statuses', (t) => {
        t.uuid('id').defaultTo(knex.raw('gen_random_uuid()')).primary();
        t.string('name').notNullable();
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
    });
    await knex.schema.createTable('cards', (t) => {
        t.uuid('id').defaultTo(knex.raw('gen_random_uuid()')).primary();
        t.string('title').notNullable();
        t.string('description').defaultTo('');
        t.integer('position').defaultTo(0);
        t.uuid('status_id').notNullable().references('id').inTable('statuses');
        t.uuid('board_id').notNullable().references('id').inTable('boards');
        t.timestamp('created_at').defaultTo(knex.fn.now());
        t.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('cards');
    await knex.schema.dropTableIfExists('statuses');
    await knex.schema.dropTableIfExists('boards');
};
//# sourceMappingURL=20241008185826_init.js.map