import prismaClient from '../prisma';

export class ReadAllUserService {
    async execute() {
        const users = await prismaClient.user.findMany();
        
        return users;
    }
}