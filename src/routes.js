import { Router } from 'express';

import TaskController from './app/controllers/TaskController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/users/:id', UserController.update);
routes.get('/users', UserController.index);
routes.delete('/users/:id', UserController.delete);

routes.post('/tasks', TaskController.store);
routes.post('/tasks/:id', TaskController.update);
routes.get('/tasks', TaskController.index);

export default routes;
