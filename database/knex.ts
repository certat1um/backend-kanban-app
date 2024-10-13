import knexInstance, { Knex } from 'knex';
import knexConfig from '../knexfile.js';
import { Model as ObjectionModel } from 'objection';

let knex: knexInstance.Knex<any, unknown[]>;

const environment = process.env.NODE_ENV || 'development';
knex = knexInstance(knexConfig[environment] as Knex.Config);

ObjectionModel.knex(knex);

const checkKnexConnection = async () => {
  return knex
    .raw('SELECT 1')
    .then(() => console.log('Database is connected'))
    .catch((err) => console.log('Failed connection to database: ' + err));
};

export { knex, ObjectionModel, checkKnexConnection };
