import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import { useContainer, useExpressServer } from 'routing-controllers';
import { Container } from 'typedi';
import bodyParser from 'body-parser';
import { checkKnexConnection } from '../database/knex';
import { BoardController } from './board/controllers/board';
import { GlobalErrorHandlerMiddleware } from './_common/middlewares/global.error-handler';
import { CardController } from './card/controllers/card';
import cors from 'cors';
import { StatusController } from './status/controllers/status';

useContainer(Container);

const app = express();
const corsOptions = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

useExpressServer(app, {
  routePrefix: '/api',
  controllers: [BoardController, StatusController, CardController],
  middlewares: [GlobalErrorHandlerMiddleware],
  defaultErrorHandler: false,
});

const PORT = process.env.PORT || 3333;

const server = app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  checkKnexConnection();
});

export const appInstance = server;
