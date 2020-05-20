import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import DevController from './app/controllers/DevController';
import SessionController from './app/controllers/SessionController';
import SessionGithubController from './app/controllers/SessionGithubController';
import SearchController from './app/controllers/SearchController';
import ForgotPassowrdController from './app/controllers/ForgotPassowrdController';
import FileController from './app/controllers/FileController';
import LocationController from './app/controllers/LocationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/api/devs', DevController.store);

routes.post('/api/sessions', SessionController.store);
routes.post('/api/githubSessions', SessionGithubController.store);

routes.post('/api/forgotPassword', ForgotPassowrdController.edit);

routes.get(
  '/api/resetPassword/:passwd_token',
  ForgotPassowrdController.redirectToResetPassword
);

routes.put('/api/resetPassword', ForgotPassowrdController.update);

routes.use(authMiddleware);

/**
 * Private routes
 */
routes.put('/api/devs', DevController.update);

routes.put('/api/location', LocationController.store);

routes.post('/api/files', upload.single('file'), FileController.store);
routes.delete('/files/:id', FileController.delete);

routes.get('/api/search', SearchController.index);
routes.get('/api/search/:id', SearchController.show);

export default routes;
