import { ICategory, ICategoryCreateDto, ICategoryUpdateDto, PaginateResponse, Request } from "../types";
import { Response } from "express";
import catchAsync from "../utils/catchAsync";
import CategoryService from "../services/category.service";
import apiResponse from "../services/apiResponse.service";

export default class CategoryController {

  static getAllCategories = catchAsync(
    async (req: Request, res: Response) => {
      const categoryService = new CategoryService();
      const categories: ICategory[] = await categoryService.getAllCategories();
      apiResponse.sendSuccess({ res: res, data: categories });
    }
  );


  static getCategories = catchAsync(
    async (req: Request, res: Response) => {
      const categoryService = new CategoryService();
      const { page, limit, filters, includes } = req.query;
      const response: PaginateResponse<ICategory> = await categoryService.getCategories({
        params: {
          page: Number(page ?? 1),
          limit: Number(limit ?? 20),
          filters: filters as Record<string, any>,
          includes: includes as string
        },
      });
      apiResponse.sendSuccess({ res: res, data: response.data, meta: response.meta })
    }
  )



  static getCategory = catchAsync(
    async (req: Request, res: Response) => {
      const categoryService = new CategoryService();
      const { categoryId } = req.params;
      const category: ICategory = await categoryService.getCategory(categoryId);
      apiResponse.sendSuccess({ res: res, data: category });
    }
  );

  static createCategory = catchAsync(
    async (req: Request, res: Response) => {
      const payload = req.body as ICategoryCreateDto;
      const categoryService = new CategoryService();
      const newCategory: ICategory = await categoryService.createCategory(payload);
      apiResponse.sendSuccess({ res: res, data: newCategory });
    }
  );

  static deleteCategory = catchAsync(
    async (req: Request, res: Response) => {
      const categoryId = req.params.categoryId;
      const categoryService = new CategoryService();
      const deletedCategory: ICategory = await categoryService.deleteCategory(categoryId);
      apiResponse.sendSuccess({ res, data: deletedCategory });
    }
  );

  static updateCategory = catchAsync(
    async (req: Request, res: Response) => {
      const categoryId = req.params.categoryId;
      const payload = req.body as ICategoryUpdateDto;
      const categoryService = new CategoryService();
      const updatedCategory: ICategory = await categoryService.updateCategory(categoryId, payload);
      apiResponse.sendSuccess({ res, data: updatedCategory });
    }
  );
}
