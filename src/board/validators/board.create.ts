import Joi from 'joi';
import { JoiSchemaInterface } from '../../_common/middlewares/joi.validator';

export const create: JoiSchemaInterface = {
  body: Joi.object()
    .keys({
      id: Joi.string().uuid({ version: 'uuidv4' }),
      name: Joi.string().required(),
    })
    .required(),
};
