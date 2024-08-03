import { Request, Response } from "express";
import { CreateProductService } from "../../service/product/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response) {
      
            // Extrair dados do corpo da requisição
            const { name, price, description, banner, category_id, amout } = req.body;

            // Criar uma instância do serviço
            const createProductService = new CreateProductService();

            // Executar o serviço para criar o produto
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id,
                amout
            });

            // Retornar o produto criado como resposta
            return res.status(201).json(product);
        } 
    }


export { CreateProductController };
