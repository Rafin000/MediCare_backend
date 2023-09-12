import { itemDeletedAndAdded } from "../helpers/utility";
import { IUser, IUserCreateDto, IUserUpdateDto, PrismaUserModel } from "../types/user.type";
import UserRoleRepository from "../repository/user-role.repository";
import userResource from "../transformer/user.transformer/user.resource";
import UserRepository from "../repository/user.repository";
import { PaginateResponse, PaginationQueryParams } from "../types";

export default class UserService {

  protected readonly userRoleRepository: UserRoleRepository
  protected readonly userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
    this.userRoleRepository = new UserRoleRepository()
  }

  public async createUser(data: IUserCreateDto): Promise<IUser> {
    try {
      const newUser = await this.userRepository.createUser(data);
      return newUser;

    } catch (error) {
      throw error;
    }
  }

  public async updateUser(id: string, payload: IUserUpdateDto): Promise<IUser> {
    try {

      const user = await this.userRepository.updateUser(id, payload)
      return user;
    } catch (error) {
      throw error;
    }
  }


  public async deleteUser(userId: string): Promise<IUser> {
    try {
      const user = await this.userRepository.deleteUser(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

  public async getUsers({
    params,
  }: {
    params: PaginationQueryParams;
  }): Promise<PaginateResponse<IUser>> {
    const response = await this.userRepository.getUsers({ ...params });
    return response;
  }


  public async getAllUsers(): Promise<IUser[]> {
    try {
      const allUsers = await this.userRepository.getAllUsers();
      return allUsers;
    } catch (error) {
      throw error;
    }
  }

  public async findUserBySpecificKey(specificKey: string, userId: string): Promise<IUser> | null {
    try {
      const user: PrismaUserModel = await this.userRepository.findUniqueBySpecificKey(specificKey, userId)
      return userResource.transform(user)
    } catch (err) {
      throw err;
    }
  }

  public async findUserById(userId: string): Promise<IUser> {
    try {
      const user: PrismaUserModel = await this.userRepository.findUniqueByKey('id', userId)
      return userResource.transform(user)
    } catch (err) {
      throw err;
    }
  }

  public async getUser(userId: string): Promise<IUser> {
    try {
      const user = await this.userRepository.getUser(userId)
      return user;
    } catch (error) {
      throw error;
    }
  }

  public async getAllUserRoles(userId: string) {
    try {
      const userRoles = await this.userRoleRepository.getAllUserRoles(userId)
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

