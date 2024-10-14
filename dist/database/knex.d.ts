import knexInstance from 'knex';
import { Model as ObjectionModel } from 'objection';
declare let knex: knexInstance.Knex<any, unknown[]>;
declare const checkKnexConnection: () => Promise<void>;
export { knex, ObjectionModel, checkKnexConnection };
