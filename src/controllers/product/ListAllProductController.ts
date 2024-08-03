import { Request, Response } from "express";
import { ListAllProductsService } from "../../service/product/ListAllProductService";

class ListAllProductsController {
    async handle(req: Request, res: Response) {
        const listAllProductsService = new ListAllProductsService();
        const products = await listAllProductsService.execute();
        return res.json(products);
    }
}

export { ListAllProductsController };
