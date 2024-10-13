import Joi from 'joi';
import { JoiSchemaInterface } from '../../_common/middlewares/joi.validator';

export const reorder: JoiSchemaInterface = {
  body: Joi.object()
    .keys({
      sourceCardId: Joi.string().uuid({ version: 'uuidv4' }).required(),
      moveTo: Joi.object()
        .keys({
          targetCardId: Joi.string().uuid({ version: 'uuidv4' }).required(),
          position: Joi.string().valid('top', 'bottom').required(),
        })
        .required(),
    })
    .required(),
};
