import { Router } from 'express';

// import controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// import middlewares
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// session routes
routes.post('/sessions', SessionController.store);

// user routes
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

export default routes;
