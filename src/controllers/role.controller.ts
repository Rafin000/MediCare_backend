import apiResponse from "../services/apiResponse.service";
import RoleService from "../services/role.service";
import { IRole, IRoleUpdateDto } from "../types/role.type";
import catchAsync from "../utils/catchAsync";

export default class RoleController {
  static createRole = catchAsync(
    async (req, res) => {
      const requestDto = req.body as IRole
      const roleService = new RoleService();
      const newRole: IRole = await roleService.createRole({ roleData: requestDto })
      apiResponse.sendSuccess({ res: res, data: newRole, code: 201 })
    }
  )

  static getAllRoles = catchAsync(
    async (req, res) => {
      const roleService = new RoleService();
      const roles: IRole[] = await roleService.getAllRoles()
      apiResponse.sendSuccess({ res: res, data: roles })
    }
  )

  static getRole = catchAsync(
    async (req, res) => {
      const { roleId } = req.params
      const roleService = new RoleService();
      const role: IRole = await roleService.getRole(roleId)
      apiResponse.sendSuccess({ res: res, data: role })
    }
  )

  static updateRole = catchAsync(
    async (req, res) => {
      const { roleId } = req.params
      const requestDto = req.body as IRoleUpdateDto
      const roleService = new RoleService();
      const updatedRole: IRole = await roleService.updateRole(roleId, requestDto)
      apiResponse.sendSuccess({ res: res, data: updatedRole })
    }
  )

  static deleteRole = catchAsync(
    async (req, res) => {
      const { roleId } = req.params
      const roleService = new RoleService();
      const deletedRole: IRole = await roleService.deleteRole(roleId)
      apiResponse.sendSuccess({ res: res, data: deletedRole })
    }
  )
}




// import apiResponse from "../services/apiResponse.service"
// import RoleService from "../services/role.service"
// import { IRole, IRoleUpdateDto } from "../types/role.type"
// import catchAsync from "../utils/catchAsync"

// const createRole = catchAsync(
//   async (req, res) => {
//     const requestDto = req.body as IRole
//     const newRole: IRole = await RoleService.createRole({ roleData: requestDto })
//     apiResponse.sendSuccess({ res: res, data: newRole, code: 201 })
//   }
// )

// const getAllRoles = catchAsync(
//   async (req, res) => {
//     const roles: IRole[] = await RoleService.getAllRoles()
//     apiResponse.sendSuccess({ res: res, data: roles })
//   }
// )

// const getRole = catchAsync(
//   async (req, res) => {
//     const { roleId } = req.params
//     const role: IRole = await RoleService.getRole(roleId)
//     apiResponse.sendSuccess({ res: res, data: role })
//   }
// )

// const updateRole = catchAsync(
//   async (req, res) => {
//     const { roleId } = req.params
//     const requestDto = req.body as IRoleUpdateDto
//     const updatedRole: IRole = await RoleService.updateRole(roleId, requestDto)
//     apiResponse.sendSuccess({ res: res, data: updatedRole })
//   }
// )

// const deleteRole = catchAsync(
//   async (req, res) => {
//     const { roleId } = req.params
//     const deletedRole: IRole = await RoleService.deleteRole(roleId)
//     apiResponse.sendSuccess({ res: res, data: deletedRole })
//   }
// )

// const RoleController = {
//   createRole,
//   getAllRoles,
//   getRole,
//   updateRole,
//   deleteRole
// }

// export default RoleController