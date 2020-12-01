import { Router } from 'express';

import auth from './middleware/auth'

import IndicatorController from './app/controllers/IndicatorController';

import TaskController from './app/controllers/TaskController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/tasks', TaskController.store);
routes.post('/tasks/:id', TaskController.update);

routes.use(auth);

routes.post('/users', UserController.store);
routes.post('/users/:id', UserController.update);
routes.get('/users', UserController.index);
routes.delete('/users/:id', UserController.delete);

routes.get('/tasks', TaskController.index);

routes.get('/indicators/perfomace/users', IndicatorController.performaceUsers);
routes.get('/indicators/tasks/completed', IndicatorController.tasksCompleted);
routes.get('/indicators/media/tasks/user', IndicatorController.mediaTasksUser);
routes.get('/indicators/media/open/doing', IndicatorController.mediaOpenDoing);
routes.get('/indicators/media/doing/finally', IndicatorController.mediaDoingFinally);

export default routes;
