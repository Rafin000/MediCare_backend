import httpStatus from "http-status";
import { db } from "../db.server";
import ApiError from "../utils/ApiError";

export default class UserRoleRepository {
  public async findAllRolesByUserId(userId: string): Promise<string[]> {
    try {
      const userAllRoles = (
        await db.user_Role.findMany({
          where: {
            user_id: userId,
          },
        })
      ).map((i) => i.role_id);
      return Promise.resolve(userAllRoles);
    } catch (error) {
      return Promise.resolve(error);
    }
  }

  public async bulkAdd(roleIds: string[], userId: string) {
    try {
      await db.user_Role.createMany({
        data: roleIds.map((i) => {
          return {
            user_id: userId,
            role_id: i,
          };
        }),
      });
    } catch (error) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Has Duplicate Entries");
    }
  }

  public async bulkDelete(roleIds: string[], userId: string) {
    try {
      await db.user_Role.deleteMany({
        where: {
          user_id: userId,
          role_id: {
            in: roleIds,
          },
        },
      });
    } catch (error) {
      throw new ApiError(httpStatus.BAD_REQUEST, "No Such Entries");
    }
  }

  public async getAllUserRoles(userId: string) {
    try {
      const userRoles = await db.user_Role.findMany({
        where: {
          user_id: userId,
        },
        select: {
          role: true,
        },
      });
      return userRoles;
    } catch (error) {
      return null;
    }
  }
}

