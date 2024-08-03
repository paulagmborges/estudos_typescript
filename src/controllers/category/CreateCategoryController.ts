import { Request, Response } from "express";
import { CreateCategoryService } from "../../service/category/CreatecategoryService";
import { categoryRequest } from "../../models/interfaces/category/CategoryRequest";

class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const { name }:categoryRequest = req.body;

        const createCategoryService = new CreateCategoryService();

      
            const category = await createCategoryService.execute({ name });
            return res.json(category);
      
    }
}
export { CreateCategoryController }

