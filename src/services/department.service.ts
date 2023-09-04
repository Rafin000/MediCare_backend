import { departments } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import departmentCollection from "../transformer/department.transformer/department.collection";
import departmentResource from "../transformer/department.transformer/department.resource";
import { IDepartment } from "../types";

export default class DepartmentService extends BaseRepository<DbType> {
  constructor() {
    super(db, 'departments');
  }

  public async getAllDepartments(): Promise<IDepartment[]> {
    try {
      const allDepartments = await this.getAll<IDepartment, departments>(departmentCollection.transformCollection);
      return allDepartments;
    } catch (error) {
      throw error;
    }
  }

  public async getDepartment(departmentId: string): Promise<IDepartment> {
    try {
      const department = await this.get<IDepartment, departments>(departmentId, departmentResource.transform);
      return department;
    } catch (error) {
      throw error;
    }
  }

  public async createDepartment(data: Partial<IDepartment>): Promise<IDepartment> {
    try {
      const newDepartment = await this.create<IDepartment>(
        {
          name: data.name,
          description: data.description
        },
        departmentResource.transform
      );
      return newDepartment;
    } catch (error) {
      throw error;
    }
  }

  public async deleteDepartment(departmentId: string): Promise<IDepartment> {
    try {
      const deletedDepartment = await this.delete<IDepartment>(departmentId, departmentResource.transform);
      return deletedDepartment;
    } catch (error) {
      throw error;
    }
  }

  public async updateDepartment(departmentId: string, payload: Partial<IDepartment>): Promise<IDepartment> {
    try {
      const { name, description } = payload;
      const updatedDepartment = await this.update<IDepartment, departments>(
        departmentId,
        {
          ...(name ? { name } : {}),
          ...(description ? { description } : {}),
        },
        departmentResource.transform
      );
      return updatedDepartment;
    } catch (error) {
      throw error;
    }
  }
}
