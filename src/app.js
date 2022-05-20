import dotenv from 'dotenv';

import { resolve } from 'path';

import './database';

import express from 'express';
import cors from 'cors';
// import helmet from 'helmet';
import delay from 'express-delay';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import cardRoutes from './routes/cardRoutes';
import deckRoutes from './routes/deckRoutes';

dotenv.config();

const whiteList = [ // origens permitidas
  // 'http://34.151.230.126',
  'http://localhost:3001',
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (!origin || whiteList.indexOf(origin) !== -1) { // vazio (ex: insonmia) ou na whiteList
      callback(null, true); // deu tudo certo
    } else {
      callback(new Error('Not Allowed by CORS')); // fora das permissões
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors(corsOptions));
    // this.app.use(helmet());
    this.app.use(delay(2000));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/cards/', cardRoutes);
    this.app.use('/decks/', deckRoutes);
  }
}

export default new App().app;
