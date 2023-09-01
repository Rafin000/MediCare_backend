import { db } from "../db.server";
import { roleTransformer } from "../transformer";
import { IRole, IRoleUpdateDto } from "../types/role.type";

export default class RoleService {
  public async createRole({ roleData }: { roleData: IRole }): Promise<IRole> {
    try {
      const newRole = await db.roles.create({
        data: {
          name: roleData.name,
          description: roleData.description,
        },
      });
      return newRole;
    } catch (error) {
      throw error;
    }
  }

  public async getAllRoles(): Promise<IRole[]> {
    try {
      const allRoles = await db.roles.findMany();
      return allRoles;
    } catch (error) {
      throw error;
    }
  }

  public async getRole(id: string): Promise<IRole> {
    try {
      const role = await db.roles.findUnique({
        where: {
          id: id,
        },
      });
      return roleTransformer.getTransformer().transform(role);
    } catch (error) {
      throw error;
    }
  }

  public async updateRole(id: string, payload: IRoleUpdateDto): Promise<IRole> {
    try {
      const { name, description } = payload;
      const role = await db.roles.update({
        where: {
          id: id,
        },
        data: {
          ...(name ? { name } : {}),
          ...(description ? { description } : {}),
        },
      });
      return role;
    } catch (error) {
      throw error;
    }
  }

  public async deleteRole(id: string): Promise<IRole> {
    try {
      const role = await db.roles.delete({
        where: {
          id: id,
        },
      });
      return role;
    } catch (error) {
      throw error;
    }
  }
}