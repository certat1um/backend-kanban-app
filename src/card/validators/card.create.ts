import Joi from 'joi';
import { JoiSchemaInterface } from '../../_common/middlewares/joi.validator';

export const create: JoiSchemaInterface = {
  body: Joi.object()
    .keys({
      id: Joi.string().uuid({ version: 'uuidv4' }),
      title: Joi.string().required(),
      description: Joi.string().min(0),
      position: Joi.number(),
      status_id: Joi.string().uuid({ version: 'uuidv4' }).required(),
      board_id: Joi.string().uuid({ version: 'uuidv4' }).required(),
    })
    .required(),
};
