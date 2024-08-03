import { Request, Response } from "express";
import { DeleteProductService } from "../../service/product/DeleteProductService";

class DeleteProductController {
    async handle(req: Request, res: Response) {
        const  product_id  = req.query.product_id as string;
        const deleteProductService = new DeleteProductService();
        const deletedProduct = await deleteProductService.execute({ product_id });
        return res.json(deletedProduct);
    }
}
export { DeleteProductController };

