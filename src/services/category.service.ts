import { ICategory, ICategoryCreateDto, ICategoryUpdateDto, PaginateResponse, PaginationQueryParams } from "../types";
import CategoryRepository from "../repository/category.repository";

export default class CategoryService {

  protected categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  public async getAllCategories(): Promise<ICategory[]> {
    try {
      const allCategories = await this.categoryRepository.getAllCategories();
      return allCategories;
    } catch (error) {
      throw error;
    }
  }


  public async getCategories({
    params,
  }: {
    params: PaginationQueryParams;
  }): Promise<PaginateResponse<ICategory>> {
    const response = await this.categoryRepository.getCategories({ ...params });
    return response;
  }


  public async getCategory(categoryId: string): Promise<ICategory> {
    try {
      const category = await this.categoryRepository.getCategory(categoryId);
      return category;
    } catch (error) {
      throw error;
    }
  }

  public async createCategory(data: ICategoryCreateDto): Promise<ICategory> {
    try {
      const newCategory = await this.categoryRepository.createCategory(data);
      return newCategory;
    } catch (error) {
      throw error;
    }
  }

  public async deleteCategory(categoryId: string): Promise<ICategory> {
    try {
      const deletedCategory = await this.categoryRepository.deleteCategory(categoryId);
      return deletedCategory;
    } catch (error) {
      throw error;
    }
  }

  public async updateCategory(categoryId: string, payload: ICategoryUpdateDto): Promise<ICategory> {
    try {
      const updatedCategory = await this.categoryRepository.updateCategory(categoryId, payload)
      return updatedCategory;
    } catch (error) {
      throw error;
    }
  }
}
