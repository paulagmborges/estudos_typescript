import {Router , Request , Response } from 'express';
import { CreateUserController } from '../controllers/user/CreateUserController';
import { AuthUserController } from '../controllers/user/AuthuserController';

const router = Router();

router.get("/test",(req:Request, res:Response) => {
    return res.json({message:"Hello!"});
});
//user routes
router.post('/user', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
export default router;
