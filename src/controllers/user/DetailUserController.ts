import { Request, Response } from "express";
import { DetailUserService } from "../../service/user/DetailUserService"

 class DetailUserController{
    async handle(req:Request, res:Response){
        const user_id = req?.user_id;
        const detailUserSrvice = new DetailUserService();
        const user = await detailUserSrvice.execute(user_id );
        return res.json(user)
    }
 }
 export{DetailUserController}