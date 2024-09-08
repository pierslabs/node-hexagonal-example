import 'reflect-metadata';
import bodyParser from 'body-parser';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
import express from 'express';
import { healthRouter } from './health/health.router';

import { AppDataSource } from './config/db/pg.config';
import { userRouter } from './users/infraestructure/http/user.router';
import { postRouter } from './posts/infraestructure/http/post.router';

function boostrap() {
  AppDataSource.initialize()
    .then(async () => {
      console.log('Data Source has been initialized!');
    })
    .catch((error) => {
      console.error('Error during Data Source initialization:', error);
    });
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/health', healthRouter);
  app.use('/user', userRouter);
  app.use('/post', postRouter);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
}

boostrap();
