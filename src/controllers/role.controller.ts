import apiResponse from "../services/apiResponse.service";
import RoleService from "../services/role.service";
import { IRole, IRoleCreateDto, IRoleUpdateDto } from "../types/role.type";
import catchAsync from "../utils/catchAsync";
import { PaginateResponse, Request } from "../types";
import { Response } from "express";

export default class RoleController {
  static createRole = catchAsync(
    async (req: Request, res: Response) => {
      const requestDto = req.body as IRoleCreateDto;
      const roleService = new RoleService();
      const newRole: IRole = await roleService.createRole({ roleData: requestDto })
      apiResponse.sendSuccess({ res: res, data: newRole, code: 201 })
    }
  )


  static getRoles = catchAsync(
    async (req: Request, res: Response) => {
      const roleService = new RoleService();
      const { page, limit, filters, includes } = req.query;
      const response: PaginateResponse<IRole> = await roleService.getRoles({
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

  static getAllRoles = catchAsync(
    async (req: Request, res: Response) => {
      const roleService = new RoleService();
      const roles: IRole[] = await roleService.getAllRoles()
      apiResponse.sendSuccess({ res: res, data: roles })
    }
  )

  static getRole = catchAsync(
    async (req: Request, res: Response) => {
      const { roleId } = req.params
      const roleService = new RoleService();
      const role: IRole = await roleService.getRole(roleId)
      apiResponse.sendSuccess({ res: res, data: role })
    }
  )

  static updateRole = catchAsync(
    async (req: Request, res: Response) => {
      const { roleId } = req.params
      const requestDto = req.body as IRoleUpdateDto;
      const roleService = new RoleService();
      const updatedRole: IRole = await roleService.updateRole(roleId, requestDto)
      apiResponse.sendSuccess({ res: res, data: updatedRole })
    }
  )

  static deleteRole = catchAsync(
    async (req: Request, res: Response) => {
      const { roleId } = req.params
      const roleService = new RoleService();
      const deletedRole: IRole = await roleService.deleteRole(roleId)
      apiResponse.sendSuccess({ res: res, data: deletedRole })
    }
  )
}



