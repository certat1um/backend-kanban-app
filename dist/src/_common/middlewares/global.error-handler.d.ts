import { Request, Response } from 'express';
import { ExpressErrorMiddlewareInterface } from 'routing-controllers';
export declare class GlobalErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
    error(err: Error, req: Request, res: Response, next: (err?: Error) => Promise<void>): Promise<void>;
}
