import Joi from 'joi';
import { JoiSchemaInterface } from '../../_common/middlewares/joi.validator';

export const getById: JoiSchemaInterface = {
  params: {
    id: Joi.string().uuid({ version: 'uuidv4' }).required(),
  },
};
