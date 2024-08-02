import prismaClient from "../../prisma";

import{ hash } from 'bcryptjs';
import { userRequest} from '../../models/interfaces/user/UserRequest'
class CreateUserService{
    async execute({name, email, password}:userRequest) {
        if(!email){
            throw new Error("Email incorrect");
            
        }
        const userAlreadyExists = await prismaClient.user.findFirts({
            where:{
                email:email
            }
        })
        if (userAlreadyExists){
            throw new Error("Email already exists")
            
        }
        // encriptando a nossa senha do usuario
        const passwordHash = await hash(password,8)
        // criando o nosso usuario
        const user = prismaClient.user.create({
            data:{
                name:name,
                email:email,
                password:passwordHash,
            },
            select:{
                id:true,
                name:true,
                email:true
            }
        })
        return user
    }
}
export{CreateUserService}