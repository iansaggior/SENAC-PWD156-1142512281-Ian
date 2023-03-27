import { Request, Response } from 'express';
import { ReadAllUserService } from '../services/ReadAllUserService';

export class ReadAllUserController {
    async handle(req: Request, res: Response) {
        const readAllUserService = new ReadAllUserService();
        const user = await readAllUserService.execute(); 

        return res.status(200).json(user);
    }
}

