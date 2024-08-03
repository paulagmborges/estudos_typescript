import { Request, Response } from "express";
import { SaleProductService } from "../../service/sale/SaleProductService";
import { SaleProductRequest } from "../../models/interfaces/sale/SaleProductrequest";

class SaleProductController {
    async handle(req: Request, res: Response) {
        const product_id = req.query.product_id as string;
        const { amount }: SaleProductRequest = req.body;

        const saleProductService = new SaleProductService();
        const saleProduct = await saleProductService.execute({ product_id, amount });

        return res.json(saleProduct);
    }
}

export { SaleProductController };
