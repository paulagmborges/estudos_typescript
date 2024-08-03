import { DeleteCategoryRequest } from './../../models/interfaces/category/DeleteRequest';
import { Request, Response } from "express";
import { DeleteCategoryService } from "../../service/category/DeleteCategoryService";

class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const category_id  = req.query.category_id as string
    const deleteCategoryService = new DeleteCategoryService();
    const result = await deleteCategoryService.execute({ category_id } as DeleteCategoryRequest);
      return res.json(result);
  }}
  export {DeleteCategoryController}