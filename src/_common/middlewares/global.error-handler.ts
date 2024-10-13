import { Request, Response } from 'express';
import { Middleware, ExpressErrorMiddlewareInterface, HttpError } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@Middleware({ type: 'after' })
export class GlobalErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
  async error(
    err: Error,
    req: Request,
    res: Response,
    next: (err?: Error) => Promise<void>,
  ): Promise<void> {
    if (err instanceof HttpError) {
      res.status(err.httpCode).json({
        error: {
          code: res.statusCode,
          errorName: err.name,
          message: err.message,
          details: [],
        },
      });
    }

    if (err.name === 'ValidationError') {
      res.status(400).json({
        error: {
          code: res.statusCode,
          errorName: 'ValidationError',
          message: 'Validation Exception',
          details: err['details'].map((d) => d.message),
        },
      });
    }

    await next(err);
  }
}
