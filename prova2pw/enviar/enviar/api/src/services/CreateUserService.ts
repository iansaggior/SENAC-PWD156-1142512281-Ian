import prismaClient from '../prisma'

interface UserRequest {
    nmUser: string;
    password: string;
    profile: string;
}
export class CreateUserService {
    async execute({ nmUser, password, profile }: UserRequest) {
        
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                nmUser: nmUser
            }
        })
        if (userAlreadyExists){
            throw new Error("Usuário informado já é existente!!")
        }
        const user = await prismaClient.user.create({
            data:{
                nmUser: nmUser,
                password: password,
                profile: profile
            }
        })
        return user;
    }
}
