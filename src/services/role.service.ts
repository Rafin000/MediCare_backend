import { Role } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import roleResource from "../transformer/hospital.transformer/hospital.resource";
import { IRole, IRoleCreateDto } from "../types/role.type";
import userCollection from "../transformer/user.transformer/user.collection";
import roleCollection from "../transformer/role.transformer/role.collection";

export default class RoleService extends BaseRepository<DbType> {

  constructor() {
    super(db, 'Role')
  }
  public async createRole({ roleData }: { roleData: IRoleCreateDto }): Promise<IRole> {
    try {
      const newRole = await this.create<IRole, Role>(
        {
          name: roleData.name,
          description: roleData.description,
        },
        roleResource.transform
      );
      return newRole;
    } catch (error) {
      throw error;
    }
  }

  public async getAllRoles(): Promise<IRole[]> {
    try {
      const allRoles = await this.getAll<IRole, Role>(roleCollection.transformCollection);
      return allRoles;
    } catch (error) {
      throw error;
    }
  }

  public async getRole(id: string): Promise<IRole> {
    try {
      const role = await this.get<IRole, Role>(id, roleResource.transform);
      return role;
    } catch (error) {
      throw error;
    }
  }

  public async updateRole(id: string, payload: Partial<IRole>): Promise<IRole> {
    try {
      const { name, description } = payload;
      const role = await this.update<IRole, Role>(
        id,
        {
          ...(name ? { name } : {}),
          ...(description ? { description } : {}),
        },
        roleResource.transform
      );
      return role;
    } catch (error) {
      throw error;
    }
  }

  public async deleteRole(id: string): Promise<IRole> {
    try {
      const role = await this.delete<IRole>(id, roleResource.transform);
      return role;
    } catch (error) {
      throw error;
    }
  }
}