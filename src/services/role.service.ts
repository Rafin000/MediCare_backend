import { db } from "../db.server";
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
      return role;
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



// import { db } from "../db.server"
// import { IRole, IRoleUpdateDto } from "../types/role.type"

// const createRole = async ({ roleData }): Promise<IRole> => {
//   try {
//     const newRole = await db.roles.create({
//       data: {
//         roleName: roleData.roleName,
//         description: roleData.description,
//       }
//     })
//     return Promise.resolve(newRole)
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

// const getAllRoles = async (): Promise<IRole[]> => {

//   try {
//     const allRoles = await db.roles.findMany();
//     return Promise.resolve(allRoles)
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

// const getRole = async (id: string): Promise<IRole> => {
//   try {
//     const role = await db.roles.findUnique({
//       where: {
//         roleId: id
//       },
//     })
//     return Promise.resolve(role)
//   }
//   catch (error) {
//     return Promise.reject(error)
//   }
// }

// const updateRole = async (id: string, payload: IRoleUpdateDto): Promise<IRole> => {
//   try {
//     const { roleName, description } = payload;
//     const role = await db.roles.update({
//       where: {
//         roleId: id
//       },
//       data: {
//         ...(roleName ? { roleName } : {}),
//         ...(description ? { description } : {}),
//       },
//     })
//     return Promise.resolve(role)
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }


// const deleteRole = async (id: string): Promise<IRole> => {
//   try {
//     const role = await db.roles.delete({
//       where: {
//         roleId: id
//       },
//     })
//     return Promise.resolve(role)
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

// const RoleService = {
//   createRole,
//   getAllRoles,
//   getRole,
//   updateRole,
//   deleteRole
// }

// export default RoleService