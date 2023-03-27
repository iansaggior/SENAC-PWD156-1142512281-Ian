import prismaClient from '../prisma';

interface UserRequest {
    nmUser: string;
    password: string;
}

export class ReadUserService {
    async execute({nmUser, password}: UserRequest) {

        const user = await prismaClient.user.findFirst({
            where: {
                nmUser: nmUser,
                password: password
            }
        })

        if (user === null){
            throw new Error("Usuário não encontrado!")
        }
        
        return user;
    }
}