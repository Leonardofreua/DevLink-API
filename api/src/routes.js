import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import DevController from './app/controllers/DevController';
import SessionController from './app/controllers/SessionController';
import SessionGithubController from './app/controllers/SessionGithubController';
import SearchController from './app/controllers/SearchController';
import ForgotPassowrdController from './app/controllers/ForgotPassowrdController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/devs', DevController.store);

routes.post('/sessions', SessionController.store);
routes.get('/githubSessions', SessionGithubController.store);

routes.post('/forgotPassword', ForgotPassowrdController.edit);

routes.get(
  '/resetPassword/:passwd_token',
  ForgotPassowrdController.redirectToResetPassword
);

routes.put('/resetPassword', ForgotPassowrdController.update);

routes.use(authMiddleware);

routes.put('/devs', DevController.update);

routes.post('/files', upload.single('file'), FileController.store);
routes.delete('/files/:id', FileController.delete);

routes.get('/search', SearchController.index);
routes.get('/search/:id', SearchController.show);

export default routes;
