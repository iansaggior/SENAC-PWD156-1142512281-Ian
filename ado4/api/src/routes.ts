import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { ReadUserController } from './controllers/ReadUserController';
import cors from 'cors';

const router = Router();

router.use(cors())

router.get(('/users/all'), new ReadUserController().handle) 

router.post('/users', new CreateUserController().handle)

export {router};

