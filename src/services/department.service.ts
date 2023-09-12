import { IDegreeUpdateDto, IDepartment, IDepartmentCreateDto } from "../types";
import DepartmentRepository from "../repository/department.repository";

export default class DepartmentService {
  protected readonly departmentRepository: DepartmentRepository;

  constructor() {
    this.departmentRepository = new DepartmentRepository();
  }

  public async getAllDepartments(): Promise<IDepartment[]> {
    try {
      const allDepartments = await this.departmentRepository.getAllDepartments();
      return allDepartments;
    } catch (error) {
      throw error;
    }
  }

  public async getDepartment(departmentId: string): Promise<IDepartment> {
    try {
      const department = await this.departmentRepository.getDepartment(departmentId);
      return department;
    } catch (error) {
      throw error;
    }
  }

  public async createDepartment(data: IDepartmentCreateDto): Promise<IDepartment> {
    try {
      const newDepartment = await this.departmentRepository.createDepartment(data);
      return newDepartment;
    } catch (error) {
      throw error;
    }
  }

  public async deleteDepartment(departmentId: string): Promise<IDepartment> {
    try {
      const deletedDepartment = await this.departmentRepository.deleteDepartment(departmentId);
      return deletedDepartment;
    } catch (error) {
      throw error;
    }
  }

  public async updateDepartment(departmentId: string, payload: IDegreeUpdateDto): Promise<IDepartment> {
    try {
      const updatedDepartment = await this.departmentRepository.updateDepartment(departmentId, payload)
      return updatedDepartment;
    } catch (error) {
      throw error;
    }
  }
}
