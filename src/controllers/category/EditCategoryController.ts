import { Request, Response } from "express";
import { EditCategoryService } from "../../service/category/EditCategoryService";
import { EditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest";

class EditCategoryController {
    async handle(req: Request, res: Response) {
        const { name }:EditCategoryRequest = req.body;

        const category_id = req.query.category_id as string;
        const editCategoryService = new EditCategoryService();
        const category = await editCategoryService.execute({
            name,
            category_id
          });
            return res.json(category_id);
      
    }
}
export { EditCategoryController }