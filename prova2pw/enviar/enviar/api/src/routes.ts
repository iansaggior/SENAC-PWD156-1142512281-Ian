import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { ReadAllUserController } from './controllers/ReadAllUserController';
import { ReadUserController } from './controllers/ReadUserController'

import cors from 'cors';

export const router = Router();

router.use(cors());

router.get(('/users/all'), new ReadAllUserController().handle);

router.post('/cadUser', new CreateUserController().handle);

router.post('/user', new ReadUserController().handle)
