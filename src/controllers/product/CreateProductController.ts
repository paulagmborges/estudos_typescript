import { Request, Response } from "express";
import { CreateProductService } from "../../service/product/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response) {
      
            // Extrair dados do corpo da requisição
            const { name, price, description, category_id, amount } = req.body;
            const banner = req.file?.filename || " " ;// Obtém o nome do arquivo
            // Criar uma instância do serviço
            const createProductService = new CreateProductService();

            // Executar o serviço para criar o produto
            const product = await createProductService.execute({
                name,
                price,
                description,
                banner: banner , // Corrigido aqui,
                category_id,
                amount
            });

            // Retornar o produto criado como resposta
            return res.status(201).json(product);
        } 
    }


export { CreateProductController };
