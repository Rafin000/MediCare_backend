import httpStatus from "http-status";
import { db } from "../db.server";
import ApiError from "../utils/ApiError";

export default class UserRoleRepository {
  public async findAllRolesByUserId(userId: string): Promise<string[]> {
    try {
      const userAllRoles = (
        await db.user_role.findMany({
          where: {
            userId: userId,
          },
        })
      ).map((i) => i.roleId);
      return Promise.resolve(userAllRoles);
    } catch (error) {
      return Promise.resolve(error);
    }
  }

  public async bulkAdd(roleIds: string[], userId: string) {
    try {
      await db.user_role.createMany({
        data: roleIds.map((i) => {
          return {
            userId: userId,
            roleId: i,
          };
        }),
      });
    } catch (error) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Has Duplicate Entries");
    }
  }

  public async bulkDelete(roleIds: string[], userId: string) {
    try {
      await db.user_role.deleteMany({
        where: {
          userId: userId,
          roleId: {
            in: roleIds,
          },
        },
      });
    } catch (error) {
      throw new ApiError(httpStatus.BAD_REQUEST, "No Such Entries");
    }
  }
}

