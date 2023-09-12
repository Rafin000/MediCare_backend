import catchAsync from "../utils/catchAsync";
import { Request } from "../types";
import { NextFunction, Response } from "express";
import UserService from "../services/user.service";
import ApiError from "../utils/ApiError";
import httpStatus from "http-status";

export default class UserMiddleware {
  static checkPayloadUserInformation = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { userId } = req.params;
      const userService = new UserService();
      await userService.findUserById(userId)

      next()
    }
  )
}