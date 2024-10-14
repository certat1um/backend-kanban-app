import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
export interface JoiSchemaInterface {
    params?: {
        [name: string]: Joi.AnySchema;
    };
    query?: {
        [name: string]: Joi.AnySchema;
    };
    body?: {
        [name: string]: Joi.AnySchema;
    } | Joi.ObjectSchema;
    headers?: {
        [name: string]: Joi.AnySchema;
    };
}
export declare const validate: (schema: JoiSchemaInterface) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
