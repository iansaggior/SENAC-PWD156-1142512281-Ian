import { Request, Response } from "express";
import { CreateUserService } from '../services/CreateUserService'

export class CreateUserController {
    async handle(req: Request, res: Response) {
        try {
            
            const { nmUser, password, profile } = req.body;

            if(!nmUser || !password || !profile){
                return res.status(400).json({Error: "Todos os campos precisam ser preenchidos!!"});
            }
            
            const createUserService = new CreateUserService();
            const user = await createUserService.execute({nmUser, password, profile});

            return res.json(user);

        } catch (error) {
            return res.status(400).json({Error: `${error}`});
        }
    }
}

