import { Router } from 'express';

import DevController from './app/controllers/DevController';
import SessionController from './app/controllers/SessionController';
import SessionGithubController from './app/controllers/SessionGithubController';
import SearchController from './app/controllers/SearchController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/devs', DevController.store);
routes.post('/sessions', SessionController.store);
routes.get('/githubSessions', SessionGithubController.store);

routes.use(authMiddleware);

// routes.put('/devs', DevController.update);

routes.get('/search', SearchController.index);

export default routes;
