import multer from 'multer';
import { Router, Request, Response } from 'express';
import { CreateUserController } from '../controllers/user/CreateUserController';
import { AuthUserController } from '../controllers/user/AuthuserController';
import { isAuthentication } from '../middlewares/isAuthentication';
import { DetailUserController } from '../controllers/user/DetailUserController';
import { CreateCategoryController } from '../controllers/category/CreateCategoryController';
import { EditCategoryController } from '../controllers/category/EditCategoryController';
import { ListCategoryController } from '../controllers/category/ListCategoryController';
import { DeleteCategoryController } from '../controllers/category/DeleteCategoryController';
import uploadConfig from '../config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp")); // Corrigido de 'upoload' para 'upload'

// Test route
router.get("/test", (req: Request, res: Response) => {
    return res.json({ message: "Hello!" });
});

// User routes

router.post('/user', new CreateUserController().handle);
router.post('/login', new AuthUserController().handle);
router.post('/me', isAuthentication, new DetailUserController().handle);

// Category routes

router.put('/category/edit', isAuthentication, new EditCategoryController().handle);
router.get('/category/all', isAuthentication, new ListCategoryController().handle);
router.delete('/category/delete', isAuthentication, new DeleteCategoryController().handle);
router.post('/category', isAuthentication, upload.single('file'), new CreateCategoryController().handle); // Ajuste se necessário



export default router;

