import { IDegree, IDegreeCreateDto, IDegreeUpdateDto, PaginateResponse, PaginationQueryParams } from "../types";
import DegreeRepository from "../repository/degree.repository";

export default class DegreeService {
  protected degreeRepository: DegreeRepository;
  constructor() {
    this.degreeRepository = new DegreeRepository();
  }

  public async getAllDegrees(): Promise<IDegree[]> {
    try {
      const allDegrees = await this.degreeRepository.getAllDegrees();
      return allDegrees;
    } catch (error) {
      throw error;
    }
  }

  public async getDegrees({
    params,
  }: {
    params: PaginationQueryParams;
  }): Promise<PaginateResponse<IDegree>> {
    const response = await this.degreeRepository.getDegrees({ ...params });
    return response;
  }


  public async getDegree(degreeId: string): Promise<IDegree> {
    try {
      const degree = await this.degreeRepository.getDegree(degreeId);
      return degree;
    } catch (error) {
      throw error;
    }
  }

  public async createDegree(data: IDegreeCreateDto): Promise<IDegree> {
    try {
      const newDegree = await this.degreeRepository.createDegree(data);
      return newDegree;
    } catch (error) {
      throw error;
    }
  }

  public async deleteDegree(degreeId: string): Promise<IDegree> {
    try {
      const deletedDegree = await this.degreeRepository.deleteDegree(degreeId);
      return deletedDegree;
    } catch (error) {
      throw error;
    }
  }

  public async updateDegree(degreeId: string, payload: IDegreeUpdateDto): Promise<IDegree> {
    try {
      const updatedDegree = await this.degreeRepository.updateDegree(degreeId, payload)
      return updatedDegree;
    } catch (error) {
      throw error;
    }
  }
}
