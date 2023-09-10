import { DbType, db } from "../db.server";
import { IUser, IUserCreateDto } from "../types/user.type";
import BaseRepository from "./base.repository";
import { User } from "@prisma/client";
import userCollection from "../transformer/user.transformer/user.collection";
import userResource from "../transformer/user.transformer/user.resource";

export default class UserRepository extends BaseRepository<DbType> {
  constructor() {
    super(db, 'User')
  }

  public async createUser(data: IUserCreateDto): Promise<IUser> {
    try {

      const newUser = await this.create<IUser, User>(
        {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          password: data.password,
          username: data.username,
          dob: data.dob,
          phone_number: data.phone_number,
          user_type: data.user_type,
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
      const { email, first_name, last_name, phone_number } = payload;
      const user = await this.update<IUser, User>(
        id,
        {
          ...(email ? { email } : {}),
          ...(first_name ? { first_name } : {}),
          ...(last_name ? { last_name } : {}),
          ...(phone_number ? { phone_number } : {}),
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
      const user = await this.delete<IUser>(id, userResource.transform);
      return user;
    } catch (error) {
      throw error;
    }
  }


  public async getAllUsers(): Promise<IUser[]> {
    try {
      const allUsers = await this.getAll<IUser, User>(userCollection.transformCollection)
      return allUsers;
    } catch (error) {
      throw error;
    }
  }

  public async findUserBySpecificKey(specificKey: string, userId: string): Promise<IUser> | null {
    try {
      const user = await this.findUniqueBySpecificKey<User>(specificKey, userId)
      return userResource.transform(user)
    } catch (err) {
      throw err;
    }
  }

  public async findUserById(userId: string): Promise<IUser> | null {
    try {
      const user = await this.findUniqueByKey<User>('id', userId)
      return userResource.transform(user)
    } catch (err) {
      throw err;
    }
  }

  public async getUser(id: string): Promise<IUser> {
    try {
      const user = await this.get<IUser, User>(id, userResource.transform)
      return user;
    } catch (error) {
      throw error;
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

