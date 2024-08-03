import { DeleteCategoryRequest } from './../models/interfaces/category/DeleteRequest';
import {Router , Request , Response } from 'express';
import { CreateUserController } from '../controllers/user/CreateUserController';
import { AuthUserController } from '../controllers/user/AuthuserController';
import { isAuthentication } from '../middlewares/isAuthentication';
import { DetailUserController } from '../controllers/user/DetailUserController';
import { CreateCategoryController } from '../controllers/category/CreateCategoryController';
import {EditCategoryController} from '../controllers/category/EditCategoryController'
import{ListCategoryController} from '../controllers/category/ListCategoryController'
import{DeleteCategoryController } from '../controllers/category/DeletecategoryController'
const router = Router();

router.get("/test",(req:Request, res:Response) => {
    return res.json({message:"Hello!"});
});
//user routes
router.post('/user', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.post('/me',isAuthentication, new DetailUserController().handle)

router.post('/category',isAuthentication, new CreateCategoryController().handle)
router.put('/category/edit',isAuthentication, new EditCategoryController().handle)
router.get('/category/all',isAuthentication, new ListCategoryController().handle)
router.delete('/category/',isAuthentication, new DeleteCategoryController().handle)
export default router;
