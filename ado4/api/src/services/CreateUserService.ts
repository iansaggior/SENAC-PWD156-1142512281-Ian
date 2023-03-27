import prismaClient from '../prisma'

interface UserRequest {
    nmUser: string;
    password: string;
    profile: string;
}
class CreateUserService {
    async execute({ nmUser, password, profile }: UserRequest) {
        
        if (!nmUser) {
            throw new Error("O nome do usuário precisa ser informado!!")
        }
        
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
export { CreateUserService }