require('dotenv/config');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const {
  IS_LOCAL,
  DB_HOST,
  DB_PORT,
  DB_PASS,
  DB_USER,
  DB_NAME,
  EXTERNAL_DB_URL,
  DB_TEST_USER,
  DB_TEST_PASS,
  DB_TEST_NAME,
} = process.env;

module.exports = {
  development: {
    client: 'postgres',
    connection: IS_LOCAL
      ? {
          host: DB_HOST,
          port: DB_PORT,
          user: DB_USER,
          password: DB_PASS,
          database: DB_NAME,
        }
      : {
          connectionString: EXTERNAL_DB_URL,
          ssl: {
            rejectUnauthorized: false,
          },
        },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: DB_HOST,
      port: DB_PORT,
      user: DB_TEST_USER,
      password: DB_TEST_PASS,
      database: DB_TEST_NAME,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};
