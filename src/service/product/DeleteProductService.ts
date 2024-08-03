import prismaClient from "../../prisma";

interface DeleteProductRequest {
    product_id: string;
}

class DeleteProductService {
    async execute({ product_id }: DeleteProductRequest) {
        if (!product_id) {
            throw new Error("Product ID is required");
        }

        // Encontrar e deletar o produto
        const deletedProduct = await prismaClient.product.delete({
            where: {
                id: product_id,
            },
        });

        return deletedProduct;
    }
}

export { DeleteProductService };
