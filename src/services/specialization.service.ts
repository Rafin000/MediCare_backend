import { ISpecialization, ISpecializationCreateDto, ISpecializationUpdateDto, PaginateResponse, PaginationQueryParams } from "../types";
import SpecializationRepository from "../repository/specialization.repository";

export default class SpecializationService {
  protected specializationRepository: SpecializationRepository;
  constructor() {
    this.specializationRepository = new SpecializationRepository();
  }

  public async getAllSpecializations(): Promise<ISpecialization[]> {
    try {
      const allSpecializations = await this.specializationRepository.getAllSpecializations();
      return allSpecializations;
    } catch (error) {
      throw error;
    }
  }


  public async getSpecializations({
    params,
  }: {
    params: PaginationQueryParams;
  }): Promise<PaginateResponse<ISpecialization>> {
    const response = await this.specializationRepository.getSpecializations({ ...params });
    return response;
  }


  public async getSpecialization(specializationId: string): Promise<ISpecialization> {
    try {
      const specialization = await this.specializationRepository.getSpecialization(specializationId);
      return specialization;
    } catch (error) {
      throw error;
    }
  }

  public async createSpecialization(data: ISpecializationCreateDto): Promise<ISpecialization> {
    try {
      const newSpecialization = await this.specializationRepository.createSpecialization(data);
      return newSpecialization;
    } catch (error) {
      throw error;
    }
  }

  public async deleteSpecialization(specializationId: string): Promise<ISpecialization> {
    try {
      const deletedSpecialization = await this.specializationRepository.deleteSpecialization(specializationId)
      return deletedSpecialization;
    } catch (error) {
      throw error;
    }
  }

  public async updateSpecialization(specializationId: string, payload: ISpecializationUpdateDto): Promise<ISpecialization> {
    try {
      const updatedSpecialization = await this.specializationRepository.updateSpecialization(specializationId, payload)
      return updatedSpecialization;
    } catch (error) {
      throw error;
    }
  }
}
