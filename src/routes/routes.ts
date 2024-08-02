import {Router , Request , Response } from 'express';
import { CreateUserController } from '../controllers/user/CreateUserController';

const router = Router();

router.get("/test",(req:Request, res:Response) => {
    return res.json({message:"Hello!"});
});
//user routes
router.post('/user', new CreateUserController().handle)
export default router;
