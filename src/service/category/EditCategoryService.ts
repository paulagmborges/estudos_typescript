import prismaClient from "../../prisma";
import { EditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest";

class EditCategoryService {
  async execute({ category_id, name }: EditCategoryRequest) {
    if (!category_id || category_id.trim() === "") {
      throw new Error("Invalid category_id");
    }

    if (!name || name.trim() === "") {
      throw new Error("Invalid name");
    }

    const productEdit = await prismaClient.category.update({
      where: {
        id: category_id,
      },
      data: {
        name: name,
      },
    });

    return productEdit;
  }
}

export { EditCategoryService };
