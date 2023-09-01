import { db } from "../db.server";
import { itemDeletedAndAdded } from "../helpers/utility";
import { IUser, IUserCreateDto } from "../types/user.type";
import UserRoleRepository from "../repository/user-role.repository";
import { userTransformer } from "../transformer";
import BaseRepository from "../repository/base.repository";

export default class UserService extends BaseRepository {
  public async createUser(data: Partial<IUser>): Promise<IUser> {
    try {
      const newUser = await this.create<IUser>("users", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        userName: data.userName,
        dob: data.dob,
        phone: data.phone,
        user_type: data.user_type
      },
        userTransformer.getTransformer().transform
      );
      return newUser;
    } catch (error) {
      throw error;
    }
  }


  public async updateUser(id: string, payload: Partial<IUser>,): Promise<IUser> {
    try {
      const { email, firstName, lastName, phone } = payload;
      const user = await this.update<IUser>(
        'users',
        id,
        {
          ...(email ? { email } : {}),
          ...(firstName ? { firstName } : {}),
          ...(lastName ? { lastName } : {}),
          ...(phone ? { phone } : {}),
        },
        userTransformer.getTransformer().transform
      );
      return user;
    } catch (error) {
      throw error;
    }
  }


  public async deleteUser(id: string): Promise<IUser> {
    try {
      const user = await this.delete('users', id, userTransformer.getTransformer().transform);
      return user;
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

  public async findUserById(userId: string): Promise<IUser> | null {
    try {
      const user = await db.users.findUnique({
        where: {
          id: userId
        },
      })
      return userTransformer.getTransformer().transform(user)
    } catch (err) {
      throw err;
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

