import prismaClient from "../../prisma";

class DetailUserService{
    async execute(user_id:string){
        if(user_id){
            if(user_id){
                const user = await prismaClient.user.finFirst({
                    where:{
                        id:user_id
                    },
                    select:{
                        id:true,
                        name:true,
                        email:true
                    }
                })
            }
        }
    }
}