import { DbType, db } from "../db.server";
import { itemDeletedAndAdded } from "../helpers/utility";
import { IUser, IUserCreateDto } from "../types/user.type";
import UserRoleRepository from "../repository/user-role.repository";
import BaseRepository from "../repository/base.repository";
import { User } from "@prisma/client";
import userCollection from "../transformer/user.transformer/user.collection";
import userResource from "../transformer/user.transformer/user.resource";
import UserRepository from "../repository/user.repository";

export default class UserService {
  protected readonly userRoleRepository: UserRoleRepository
  protected readonly userRepository: UserRepository
  constructor() {
    this.userRepository = new UserRepository()
    this.userRoleRepository = new UserRoleRepository()
  }

  public async createUser(data: Partial<IUser>): Promise<IUser> {
    try {

      const newUser = await this.userRepository.create<IUserCreateDto, IUser>(
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          password: data.password,
          username: data.userName,
          dob: data.dob,
          phone_number: data.phone,
          user_type: data.userType,
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
      const user = await this.userRepository.update<IUser, User>(
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
      const user = await this.userRepository.delete<IUser>(id, userResource.transform);
      return user;
    } catch (error) {
      throw error;
    }
  }


  public async getAllUsers(): Promise<IUser[]> {
    try {
      const allUsers = await this.userRepository.getAll<IUser, User>(userCollection.transformCollection)
      return allUsers;
    } catch (error) {
      throw error;
    }
  }

  public async findUserBySpecificKey(specificKey: string, userId: string): Promise<IUser> | null {
    try {
      const user = await this.userRepository.findUniqueBySpecificKey<User>(specificKey, userId)
      return userResource.transform(user)
    } catch (err) {
      throw err;
    }
  }

  public async findUserById(userId: string): Promise<IUser> | null {
    try {
      const user = await this.userRepository.findUniqueByKey<User>('id', userId)
      return userResource.transform(user)
    } catch (err) {
      throw err;
    }
  }

  public async getUser(id: string): Promise<IUser> {
    try {
      const user = await this.userRepository.get<IUser, User>(id, userResource.transform)
      return user;
    } catch (error) {
      throw error;
    }
  }

  public async getAllUserRoles(userId: string) {
    try {
      const userRoles = await db.user_role.findMany({
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

  public async addOrRemoveUserRoles({ roleIds, userId }) {
    try {
   
      const userALLRolesIds = await this.userRoleRepository.findAllRolesByUserId(userId);
      const { itemsToBeAdded, itemsToBeDeleted } = itemDeletedAndAdded(
        userALLRolesIds,
        roleIds
      );
      await this.userRoleRepository.bulkAdd(itemsToBeAdded, userId);
      await this.userRoleRepository.bulkDelete(itemsToBeDeleted, userId);
    } catch (error) {
      throw error;
    }
  }
}

