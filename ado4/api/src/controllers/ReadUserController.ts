import {Request, Response} from 'express';
import { ReadUserService } from '../services/ReadUserService';

export class ReadUserController {
    async handle(req: Request, res: Response) {
        const readUserService = new ReadUserService();
        const user = await readUserService.execute(); 
        
        res.header({
            Headers: {
                "Access-Control-Allow-Origin": "http://127.0.0.1:5500/index.html"
            }
        })

        return res.status(200).json(user);
    }
}

