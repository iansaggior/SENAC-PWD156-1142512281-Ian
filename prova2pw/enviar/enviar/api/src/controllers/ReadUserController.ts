import { Request, Response } from 'express';
import { ReadUserService } from '../services/ReadUserService';

export class ReadUserController {
    async handle(req: Request, res: Response) {

        try {
            const {nmUser, password} = req.body;

            if(!nmUser || !password){
                return res.status(400).json({Error: "Usuário e senha precisam ser informados"});
            }

            const readUserService = new ReadUserService();
            const user = await readUserService.execute({nmUser, password}); 

            return res.status(200).json(user);

        } catch (error) {
            return res.status(400).json({Error: `${error}`});
        }
    }
}

