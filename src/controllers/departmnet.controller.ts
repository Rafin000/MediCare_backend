import { IDegreeUpdateDto, IDepartment, IDepartmentCreateDto, PaginateResponse, Request } from "../types";
import { Response } from "express";
import catchAsync from "../utils/catchAsync";
import DepartmentService from "../services/department.service";
import apiResponse from "../services/apiResponse.service";

export default class DepartmentController {

  static getAllDepartments = catchAsync(
    async (req: Request, res: Response) => {
      const departmentService = new DepartmentService();
      const departments: IDepartment[] = await departmentService.getAllDepartments();
      apiResponse.sendSuccess({ res: res, data: departments });
    }
  );


  static getDepartments = catchAsync(
    async (req: Request, res: Response) => {
      const departmentService = new DepartmentService();
      const { page, limit, filters, includes } = req.query;
      const response: PaginateResponse<IDepartment> = await departmentService.getDepartments({
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


  static getDepartment = catchAsync(
    async (req: Request, res: Response) => {
      const departmentService = new DepartmentService();
      const { departmentId } = req.params;
      const department: IDepartment = await departmentService.getDepartment(departmentId);
      apiResponse.sendSuccess({ res: res, data: department });
    }
  );

  static createDepartment = catchAsync(
    async (req: Request, res: Response) => {
      const payload = req.body as IDepartmentCreateDto;
      const departmentService = new DepartmentService();
      const newDepartment: IDepartment = await departmentService.createDepartment(payload);
      apiResponse.sendSuccess({ res: res, data: newDepartment });
    }
  );

  static deleteDepartment = catchAsync(
    async (req: Request, res: Response) => {
      const departmentId = req.params.departmentId;
      const departmentService = new DepartmentService();
      const deletedDepartment: IDepartment = await departmentService.deleteDepartment(departmentId);
      apiResponse.sendSuccess({ res, data: deletedDepartment });
    }
  );

  static updateDepartment = catchAsync(
    async (req: Request, res: Response) => {
      const departmentId = req.params.departmentId;
      const payload = req.body as IDegreeUpdateDto;
      const departmentService = new DepartmentService();
      const updatedDepartment: IDepartment = await departmentService.updateDepartment(departmentId, payload);
      apiResponse.sendSuccess({ res, data: updatedDepartment });
    }
  );
}
