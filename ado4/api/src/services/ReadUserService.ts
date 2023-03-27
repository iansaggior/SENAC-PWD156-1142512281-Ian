import prismaClient from '../prisma';

export class ReadUserService {
    async execute() {
        const users = await prismaClient.user.findMany();
        
        return users;
    }
}