import Joi from 'joi';
import { JoiSchemaInterface } from '../../_common/middlewares/joi.validator';

export const deleteById: JoiSchemaInterface = {
  params: {
    id: Joi.string().uuid({ version: 'uuidv4' }).required(),
  },
};
