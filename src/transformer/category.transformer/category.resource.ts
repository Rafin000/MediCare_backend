import { ICategory } from "../../types";
import { Transformer } from "../transformer";

class CategoryResource implements Transformer {
  transform(category: any): ICategory {
    return {
      id: category.id,
      name: category.name,
      description: category.description,
    };
  }
}

const categoryResource = new CategoryResource();

export default categoryResource;
