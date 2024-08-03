import { Request, Response } from "express";
import { ListProductByCategoryService } from "../../service/product/ListProductService";

class ListProductByCategoryController {
    async handle(req: Request, res: Response) {
     
        const  category_id  = req.query.category_id as string;
        const listProductByCategoryService = new ListProductByCategoryService();
        const products = await listProductByCategoryService.execute({category_id});
        return res.json(products);
            
       
    }
}

export { ListProductByCategoryController };
