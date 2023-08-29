import { Router, Response } from "express";
import userService from "../services/user.service";
import { IUser } from "../types/user.type";
import catchAsync from "../utils/catchAsync";
import apiResponse from "../services/apiResponse.service";
import { IUserAddOrRemoveRolesPayload } from "../types/user.type";
// import { CustomRequest } from "../middlewares/testMiddleWare";
import UserService from "../services/user.service";

export default class UserController {
  static createUser = catchAsync(
    async (req, res: Response) => {
      const payload = req.body as IUser
      const userService = new UserService();
      const newUser: IUser = await userService.createUser(payload)
      apiResponse.sendSuccess({ res: res, data: newUser, code: 201 })
    }
  )

  static getAllUsers = catchAsync(
    async (req, res: Response) => {
      const userService = new UserService();
      const users: IUser[] = await userService.getAllUsers()
      apiResponse.sendSuccess({ res: res, data: users })
    }
  )

  static getUser = catchAsync(
    async (req, res: Response) => {
      const { userId } = req.params
      const userService = new UserService();
      const user: IUser = await userService.getUser(userId)
      apiResponse.sendSuccess({ res: res, data: user })
    }
  )

  static updateUser = catchAsync(
    async (req, res: Response) => {
      const { userId } = req.params;
      const payload = req.body as Partial<IUser>
      const userService = new UserService();
      const updatedUser: IUser = await userService.updateUser(userId, payload)
      apiResponse.sendSuccess({ res: res, data: updatedUser })
    }
  )

  static deleteUser = catchAsync(
    async (req, res: Response) => {
      const { userId } = req.params
      const userService = new UserService();
      const deletedUser: IUser = await userService.deleteUser(userId)
      apiResponse.sendSuccess({ res: res, data: deletedUser })
    }
  )

  static addOrRemoveUserRoles = catchAsync(
    async (req, res: Response) => {
      const { userId } = req.params
      const requestDto = req.body as IUserAddOrRemoveRolesPayload
      const userService = new UserService();
      await userService.addOrRemoveUserRoles({ roleIds: requestDto, userId: userId })
      apiResponse.sendSuccess({ res, message: 'Updated Role' })
    }
  )

  static getUserAllRoles = catchAsync(
    async (req, res: Response) => {
      const { userId } = req.params
      const currentUser = req.user
      const userService = new UserService();
      const userAllRoles = await userService.getAllUserRoles(userId || currentUser.id);
      apiResponse.sendSuccess({ res, data: userAllRoles })
    }
  )
}


// import { Router, Response, response } from "express";
// import userService from "../services/user.service";
// import { IUser } from "../models/user.model";
// import catchAsync from "../utils/catchAsync";
// import apiResponse from "../services/apiResponse.service";
// import { IUserAddOrRemoveRolesPayload } from "../types/user.type";
// import { CustomRequest } from "../middlewares/testMiddleWare";

// const createUser = catchAsync(
//   async (req, res: Response) => {
//     const payload = req.body as IUser
//     const newUser: IUser = await userService.createUser(payload)
//     apiResponse.sendSuccess({ res: res, data: newUser, code: 201 })
//   }
// )

// const getAllUsers = catchAsync(
//   async (req, res: Response) => {
//     const users: IUser[] = await userService.getAllUsers()
//     apiResponse.sendSuccess({ res: res, data: users })
//   }
// )

// const getUser = catchAsync(
//   async (req, res: Response) => {
//     const { userId } = req.params
//     const user: IUser = await userService.getUser(userId)
//     apiResponse.sendSuccess({ res: res, data: user })
//   }
// )

// const updateUser = catchAsync(
//   async (req, res: Response) => {
//     const { userId } = req.params;
//     const payload = req.body as Partial<IUser>
//     const updatedUser: IUser = await userService.updateUser(userId, payload)
//     apiResponse.sendSuccess({ res: res, data: updatedUser })
//   }
// )

// const deleteUser = catchAsync(
//   async (req, res: Response) => {
//     const { userId } = req.params
//     const deletedUser: IUser = await userService.deleteUser(userId)
//     apiResponse.sendSuccess({ res: res, data: deletedUser })
//   }
// )

// const addOrRemoveUserRoles = catchAsync(
//   async (req: CustomRequest, res: Response) => {
//     const { userId } = req.params
//     const requestDto = req.body as IUserAddOrRemoveRolesPayload
//     await userService.addOrRemoveUserRoles({ roleIds: requestDto, userId: userId })
//     apiResponse.sendSuccess({ res, message: 'Updated Role' })
//   }
// )

// const getUserAllRoles = catchAsync(
//   async (req: CustomRequest, res: Response) => {
//     const { userId } = req.params
//     const currentUser = req.user
//     const userAllRoles = await userService.getAllUserRoles(userId || currentUser.userId);
//     apiResponse.sendSuccess({ res, data: userAllRoles })
//   }
// )

// const userController = {
//   createUser,
//   getUser,
//   getAllUsers,
//   updateUser,
//   deleteUser,
//   addOrRemoveUserRoles,
//   getUserAllRoles
// }
// export default userController;

