import prismaClient from "../../prisma";
import { DeleteCategoryRequest } from "../../models/interfaces/category/DeleteRequest";

class DeleteCategoryService {
    async execute({ category_id }:DeleteCategoryRequest ) {
        if (category_id) {
        const category = await prismaClient.category.delete({
            where: {
                id:category_id
            }
          
        });

        return category;
    }
}
}
export { DeleteCategoryService };
