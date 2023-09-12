import HospitalRepository from "../repository/hospital.repository";
import { IHospital, IHospitalCreateDto, IHospitalUpdateDto, PaginateResponse, PaginationQueryParams } from "../types";

export default class HospitalService {
  protected readonly hospitalRepository: HospitalRepository;
  constructor() {
    this.hospitalRepository = new HospitalRepository();
  }

  public async getAllHospitals(): Promise<IHospital[]> {
    try {
      const allHospital = await this.hospitalRepository.getAllHospitals();
      return allHospital;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async getHospital(hospitalId: string): Promise<IHospital> {
    try {
      const hospital = await this.hospitalRepository.getHospital(hospitalId)
      return hospital
    } catch (error) {
      throw error
    }
  }


  public async getHospitals({
    params,
  }: {
    params: PaginationQueryParams;
  }): Promise<PaginateResponse<IHospital>> {
    const response = await this.hospitalRepository.getHospitals({ ...params });
    return response;
  }


  public async createHospital(data: IHospitalCreateDto): Promise<IHospital> {
    try {
      const newHospital = await this.hospitalRepository.createHospital(data);
      return newHospital;
    } catch (error) {
      return error;
    }
  }

  public async deleteHospital(hospitalId: string): Promise<IHospital> {
    try {
      const deletedHospital = await this.hospitalRepository.deleteHospital(hospitalId);
      return deletedHospital;
    } catch (error) {
      throw error;
    }
  }

  public async updateHospital(hospitalId: string, payload: IHospitalUpdateDto): Promise<IHospital> {
    try {
      const updatedHospital = await this.hospitalRepository.updateHospital(hospitalId, payload)
      return updatedHospital;
    } catch (error) {
      throw error;
    }
  }
}