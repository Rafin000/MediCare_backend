import { IRole, IRoleCreateDto, IRoleUpdateDto } from "../types/role.type";
import RoleRepository from "../repository/role.repository";

export default class RoleService {
  protected readonly roleRepository: RoleRepository;

  constructor() {
    this.roleRepository = new RoleRepository();
  }
  public async createRole({ roleData }: { roleData: IRoleCreateDto }): Promise<IRole> {
    try {
      const newRole = await this.roleRepository.createRole({ roleData: roleData });
      return newRole;
    } catch (error) {
      throw error;
    }
  }

  public async getAllRoles(): Promise<IRole[]> {
    try {
      const allRoles = await this.roleRepository.getAllRoles();
      return allRoles;
    } catch (error) {
      throw error;
    }
  }

  public async getRole(RoleId: string): Promise<IRole> {
    try {
      const role = await this.roleRepository.getRole(RoleId);
      return role;
    } catch (error) {
      throw error;
    }
  }

  public async updateRole(RoleId: string, payload: IRoleUpdateDto): Promise<IRole> {
    try {
      const role = await this.roleRepository.updateRole(RoleId, payload)
      return role;
    } catch (error) {
      throw error;
    }
  }

  public async deleteRole(roleId: string): Promise<IRole> {
    try {
      const role = await this.roleRepository.deleteRole(roleId)
      return role;
    } catch (error) {
      throw error;
    }
  }
}