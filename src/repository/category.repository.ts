import { Category } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import categoryCollection from "../transformer/category.transformer/category.collection";
import categoryResource from "../transformer/category.transformer/category.resource";
import { ICategory, ICategoryCreateDto, ICategoryUpdateDto, PaginateResponse, PaginationQueryParams } from "../types";
import { buildIncludesObject, buildWhereObject } from "../utils/utils";

export default class CategoryRepository extends BaseRepository<DbType> {
  constructor() {
    super(db, 'Category');
  }

  public async getAllCategories(): Promise<ICategory[]> {
    try {
      const allCategories = await this.getAll<ICategory, Category>(categoryCollection.transformCollection);
      return allCategories;
    } catch (error) {
      throw error;
    }
  }


  public async getCategories({
    page,
    limit,
    filters,
    includes = '',
  }: PaginationQueryParams): Promise<PaginateResponse<ICategory>> {
    try {
      const includeArray = includes.split(',');

      const response = await this.paginate({
        page,
        pageSize: limit,
        transformCollection: categoryCollection.transformCollection,
        options: {
          includes: buildIncludesObject(includeArray ?? []),
          where: buildWhereObject(filters),
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }


  
  public async getCategory(categoryId: string): Promise<ICategory> {
    try {
      const category = await this.get<ICategory, Category>(categoryId, categoryResource.transform);
      return category;
    } catch (error) {
      throw error;
    }
  }

  public async createCategory(data: ICategoryCreateDto): Promise<ICategory> {
    try {
      const newCategory = await this.create<ICategory, Category>(
        {
          name: data.name,
          description: data.description
        },
        categoryResource.transform
      );
      return newCategory;
    } catch (error) {
      throw error;
    }
  }

  public async deleteCategory(categoryId: string): Promise<ICategory> {
    try {
      const deletedCategory = await this.delete<ICategory>(categoryId, categoryResource.transform);
      return deletedCategory;
    } catch (error) {
      throw error;
    }
  }

  public async updateCategory(categoryId: string, payload: ICategoryUpdateDto): Promise<ICategory> {
    try {
      const { name, description } = payload;
      const updatedCategory = await this.update<ICategory, Category>(
        categoryId,
        {
          ...(name ? { name } : {}),
          ...(description ? { description } : {}),
        },
        categoryResource.transform
      );
      return updatedCategory;
    } catch (error) {
      throw error;
    }
  }
}
