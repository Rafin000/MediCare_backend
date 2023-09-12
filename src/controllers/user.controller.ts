import { Router, Response } from "express";
import { PaginateResponse, Request } from '../types'
import { IUser, IUserCreateDto, IUserUpdateDto } from "../types/user.type";
import catchAsync from "../utils/catchAsync";
import apiResponse from "../services/apiResponse.service";
import { IUserAddOrRemoveRolesPayload } from "../types/user.type";
import UserService from "../services/user.service";

export default class UserController {
  static createUser = catchAsync(
    async (req: Request, res: Response) => {
      const payload = req.body as IUserCreateDto
      const userService = new UserService();
      const newUser: IUser = await userService.createUser(payload)
      apiResponse.sendSuccess({ res: res, data: newUser })
    }
  )

  static getAllUsers = catchAsync(
    async (req: Request, res: Response) => {
      const userService = new UserService();
      const users: IUser[] = await userService.getAllUsers()
      apiResponse.sendSuccess({ res: res, data: users })
    }
  )

  static getUsers = catchAsync(
    async (req: Request, res: Response) => {
      const userService = new UserService();
      const { page, limit, filters, includes } = req.query;
      const response: PaginateResponse<IUser> = await userService.getUsers({
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

  static getUser = catchAsync(
    async (req: Request, res: Response) => {
      const { userId } = req.params
      const userService = new UserService();
      const user: IUser = await userService.getUser(userId)
      apiResponse.sendSuccess({ res: res, data: user })
    }
  )

  static updateUser = catchAsync(
    async (req: Request, res: Response) => {
      const { userId } = req.params;
      const payload = req.body as IUserUpdateDto;
      const userService = new UserService();
      const updatedUser: IUser = await userService.updateUser(userId, payload)
      apiResponse.sendSuccess({ res: res, data: updatedUser })
    }
  )

  static deleteUser = catchAsync(
    async (req: Request, res: Response) => {
      const { userId } = req.params
      const userService = new UserService();
      const deletedUser: IUser = await userService.deleteUser(userId)
      apiResponse.sendSuccess({ res: res, data: deletedUser })
    }
  )

  static addOrRemoveUserRoles = catchAsync(
    async (req: Request, res: Response) => {
      const { userId } = req.params
      const requestDto = req.body as IUserAddOrRemoveRolesPayload
      const userService = new UserService();
      await userService.addOrRemoveUserRoles({ roleIds: requestDto, userId: userId })
      apiResponse.sendSuccess({ res, message: 'Updated Role' })
    }
  )

  static getUserAllRoles = catchAsync(
    async (req: Request, res: Response) => {
      const { userId } = req.params
      const currentUser = req.user
      const userService = new UserService();
      const userAllRoles = await userService.getAllUserRoles(userId || currentUser.id);
      apiResponse.sendSuccess({ res, data: userAllRoles })
    }
  )
}


