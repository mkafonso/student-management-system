import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Makaya Afonso',
    email: 'mkafonsos@gmail.com',
    password_hash: 'dasdsdas',
  });

  return res.json(user);
});

export default routes;
