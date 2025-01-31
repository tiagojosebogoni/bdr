import './bootstrap';

import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';

// Uncomment this line to enable database access
// --------
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

}

export default new App().server;
