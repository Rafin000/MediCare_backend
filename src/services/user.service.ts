import { db } from "../db.server";
import { itemDeletedAndAdded } from "../helpers/utility";
import { IUser, IUserCreateDto } from "../types/user.type";
import UserRoleRepository from "../repository/user-role.repository";
import { userTransformer } from "../transformer";

export default class UserService {
  public async createUser(data: IUserCreateDto): Promise<IUser> {
    try {
      const newUser = await db.users.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          userName: data.userName,
          dob: data.dob,
          phone: data.phone,
          user_type: data.userType
        },
      });
      return userTransformer.getTransformer().transform(newUser);
    } catch (error) {
      throw error;
    }
  }

  public async getAllUsers(): Promise<IUser[]> {
    try {
      const allRawUsers = await db.users.findMany();
      const allUsers = allRawUsers.map((user) =>
        userTransformer.getTransformer().transform(user)
      );
      return allUsers;
    } catch (error) {
      throw error;
    }
  }

  public async getUser(id: string): Promise<IUser> {
    try {
      const user = await db.users.findUnique({
        where: {
          id: id,
        },
        include: {
          user_roles: {
            include: {
              role: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });
      return userTransformer.getTransformer().transform(user);
    } catch (error) {
      throw error;
    }
  }

  public async updateUser(id: string, payload: Partial<IUser>): Promise<IUser> {
    try {
      const { email, firstName, lastName, phone } = payload;
      const user = await db.users.update({
        where: {
          id: id,
        },
        data: {
          ...(email ? { email } : {}),
          ...(firstName ? { firstName } : {}),
          ...(lastName ? { lastName } : {}),
          ...(phone ? { phone } : {}),
        },
      });
      return userTransformer.getTransformer().transform(user);
    } catch (error) {
      throw error;
    }
  }

  public async deleteUser(id: string): Promise<IUser> {
    try {
      const user = await db.users.delete({
        where: {
          id: id,
        },
      });
      return userTransformer.getTransformer().transform(user);
    } catch (error) {
      throw error;
    }
  }

  public async getAllUserRoles(userId: string) {
    try {
      const userRoles = await db.user_role.findMany({
        where: {
          userId: userId,
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

  public async addOrRemoveUserRoles({ roleIds, userId }) {
    try {
      const userRoleRepository = new UserRoleRepository();
      const UserALLRoles = await userRoleRepository.findAllRolesByUserId(userId);
      const { itemsToBeAdded, itemsToBeDeleted } = itemDeletedAndAdded(
        UserALLRoles,
        roleIds
      );
      await userRoleRepository.bulkAdd(itemsToBeAdded, userId);
      await userRoleRepository.bulkDelete(itemsToBeDeleted, userId);
    } catch (error) {
      throw error;
    }
  }
}

