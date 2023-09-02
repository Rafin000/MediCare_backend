import { DbType, db } from "../db.server";
import { itemDeletedAndAdded } from "../helpers/utility";
import { IUser } from "../types/user.type";
import UserRoleRepository from "../repository/user-role.repository";
import BaseRepository from "../repository/base.repository";
import { users } from "@prisma/client";
import userCollection from "../transformer/user.transformer/user.collection";
import userResource from "../transformer/user.transformer/user.resource";

export default class UserService extends BaseRepository<DbType> {

  constructor() {
    super(db, 'users')
  }

  public async createUser(data: Partial<IUser>): Promise<IUser> {
    try {

      const newUser = await this.create<IUser>(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          userName: data.userName,
          dob: data.dob,
          phone: data.phone,
          user_type: data.user_type
        },
        userResource.transform
      );
      return newUser;
    } catch (error) {
      throw error;
    }
  }


  public async updateUser(id: string, payload: Partial<IUser>,): Promise<IUser> {
    try {
      const { email, firstName, lastName, phone } = payload;
      const user = await this.update<IUser, users>(
        id,
        {
          ...(email ? { email } : {}),
          ...(firstName ? { firstName } : {}),
          ...(lastName ? { lastName } : {}),
          ...(phone ? { phone } : {}),
        },
        userResource.transform
      );
      return user;
    } catch (error) {
      throw error;
    }
  }


  public async deleteUser(id: string): Promise<IUser> {
    try {
      const user = await this.delete(id, userResource.transform);
      return user;
    } catch (error) {
      throw error;
    }
  }


  public async getAllUsers(): Promise<IUser[]> {
    try {
      const allUsers = await this.getAll<IUser, users>(userCollection.transformCollection)
      return allUsers;
    } catch (error) {
      throw error;
    }
  }

  public async findUserBySpecificKey(specificKey: string, userId: string): Promise<IUser> | null {
    try {
      const user = await this.findUniqueBySpecificKey<users>(specificKey, userId)
      return userResource.transform(user)
    } catch (err) {
      throw err;
    }
  }

  public async findUserById(userId: string): Promise<IUser> | null {
    try {
      const user = await this.findUniqueByKey<users>('id', userId)
      return userResource.transform(user)
    } catch (err) {
      throw err;
    }
  }

  public async getUser(id: string): Promise<IUser> {
    try {
      const user = await this.get<IUser, users>(id, userResource.transform)
      return user;
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

