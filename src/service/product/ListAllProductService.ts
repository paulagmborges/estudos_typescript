import prismaClient from "../../prisma";

class ListAllProductsService {
    async execute() {
        // Buscar todos os produtos
        const products = await prismaClient.product.findMany({
            select:{
                id:true,
                name:true,
                amount:true,
            },
            orderBy:{
                created_at:'desc'
            }
    });
        return products;
    }
}

export { ListAllProductsService };
