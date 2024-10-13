import Joi from 'joi';
import { JoiSchemaInterface } from '../../_common/middlewares/joi.validator';

export const updateById: JoiSchemaInterface = {
  params: {
    id: Joi.string().uuid({ version: 'uuidv4' }).required(),
  },
  body: Joi.object()
    .keys({
      id: Joi.string().uuid({ version: 'uuidv4' }),
      title: Joi.string(),
      description: Joi.string().min(0),
      position: Joi.number(),
      status_id: Joi.string().uuid({ version: 'uuidv4' }),
      board_id: Joi.string().uuid({ version: 'uuidv4' }),
    })
    .required(),
};
