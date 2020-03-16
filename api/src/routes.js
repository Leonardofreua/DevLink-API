import { Router } from 'express';

import DevController from './app/controllers/DevController';
import SessionController from './app/controllers/SessionController';
import LoginGithubController from './app/controllers/LoginGithubController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/devs', DevController.store);
routes.post('/sessions', SessionController.store);

routes.post('/loginGithub', LoginGithubController.store);

routes.use(authMiddleware);

routes.put('/devs', DevController.update);

export default routes;
