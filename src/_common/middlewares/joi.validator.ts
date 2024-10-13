import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import _ from 'lodash';

export interface JoiSchemaInterface {
  params?: { [name: string]: Joi.AnySchema };
  query?: { [name: string]: Joi.AnySchema };
  body?: { [name: string]: Joi.AnySchema } | Joi.ObjectSchema;
  headers?: { [name: string]: Joi.AnySchema };
}

// export const _joiPagination = Joi.object()
//   .keys(joiPaginationObject)
//   .default({ page: 1, pageSize: 20 })
//   .optional();

// export const joiPaginationQuery = {
//   page: Joi.number().integer().min(1).default(1),
//   pageSize: Joi.number().integer().min(1).max(100).default(20),
// };

export const validate = (schema: JoiSchemaInterface) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const incomeEventObj = _.pick(req, ...Object.keys(schema));
      const validatedObject = await Joi.object(schema).validateAsync(incomeEventObj, {
        abortEarly: false,
      });
      req = _.merge({}, req, validatedObject);
      next();
    } catch (e) {
      next(e);
    }
  };
};
