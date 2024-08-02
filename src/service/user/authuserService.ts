import { PrismaClient } from '@prisma/client';
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import {  authRequest}from "../../models/interfaces/auth/authrequest"
import prismaClient from '../../prisma';
class AuthUserService{
    async execute({email,password}:authRequest){
      if (!email ){
        throw new Error ("email precisa ser enviado")
      }
      if (!password ){
        throw new Error ("senha precisa ser enviada")
      }
   
        // verificar no banco de dados se existe um usuario com email passado
    const user = await prismaClient.user.findFirst({
        where:{
            email:email
        }
    })
    if(!user){
        throw new Error("Worng username or password")
    }

//verifica se a senha do usuario esta correta
const passwordMatch = await compare(password,user?.password)
if(!passwordMatch){
    throw new Error ("Worng password")
}
const token = sign(
    {
        name:user?.name,
        email:user?.email
    },
    process.env.JWT_SECRET as string,
    {
        subject:user?.id,
        expiresIn:"30d"
    }
    
);
return{
    id:user?.id,
    name:user?.name,
    email:user?.name,
    token:token
}
    }
}


export {AuthUserService}


