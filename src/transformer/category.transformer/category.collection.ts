import { Category } from "@prisma/client";
import { ICategory } from "../../types";
import { CollectionTransformer } from "../transformer";
import categoryResource from "./category.resource";

class CategoryCollection implements CollectionTransformer {
  transformCollection(requestedData: Category[]): ICategory[] {
    return requestedData.map((category) =>
      categoryResource.transform(category)
    );
  }
}

const categoryCollection = new CategoryCollection();

export default categoryCollection;
