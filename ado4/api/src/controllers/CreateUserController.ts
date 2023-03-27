import { Request, response, Response } from "express";
import { CreateUserService } from '../services/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response) {
        try {
            
            const { nmUser, password, profile } = req.body;
            
            const createUserService = new CreateUserService();
            const user = await createUserService.execute({nmUser, password, profile});

            return res.json(user);

        } catch (error) {
            return res.status(400).send("" + error);
        }
    }
}
export { CreateUserController }
