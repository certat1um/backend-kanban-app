import Joi from 'joi';
import { JoiSchemaInterface } from '../../_common/middlewares/joi.validator';

export const getAllByBoardId: JoiSchemaInterface = {
  params: {
    boardId: Joi.string().uuid({ version: 'uuidv4' }).required(),
  },
};
