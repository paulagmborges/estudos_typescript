import { Request, Response } from "express";
import { CreateUserService } from "../../service/user/CreateUserService";
import {userRequest} from "../../models/interfaces/user/UserRequest"
 class CreateUserController{
    async handle(req:Request, res:Response){
        const {name, email, password}:userRequest = req.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            name,email,password
        });
        return res.json(user)
    }
 }
 export{CreateUserController}