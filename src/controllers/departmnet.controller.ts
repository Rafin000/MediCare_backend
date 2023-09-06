import { IDepartment, Request } from "../types";
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
      const payload = req.body as IDepartment;
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
      const payload = req.body as Partial<IDepartment>;
      const departmentService = new DepartmentService();
      const updatedDepartment: IDepartment = await departmentService.updateDepartment(departmentId, payload);
      apiResponse.sendSuccess({ res, data: updatedDepartment });
    }
  );
}
