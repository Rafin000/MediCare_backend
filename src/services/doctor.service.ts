import { IDoctor, IDoctorCreateDto, IDoctorCreateWithUserInfoDto, IDoctorUpdateDto, PaginateResponse, PaginationQueryParams } from "../types";
import DoctorRepository from "../repository/doctor.repository";
import UserRepository from "../repository/user.repository";

export default class DoctorService {
  protected readonly doctorRepository: DoctorRepository
  protected readonly userRepository: UserRepository

  constructor() {
    this.doctorRepository = new DoctorRepository()
  }

  public async getAllDoctors(): Promise<IDoctor[]> {
    try {
      const allDoctors = await this.doctorRepository.getAllDoctors();
      return allDoctors;
    } catch (error) {
      throw error;
    }
  }

  public async getDoctors({
    params,
  }: {
    params: PaginationQueryParams;
  }): Promise<PaginateResponse<IDoctor>> {
    const response = await this.doctorRepository.getDoctors({ ...params });
    return response;
  }

  public async getDoctor(doctorId: string): Promise<IDoctor> {
    try {
      const doctor = await this.doctorRepository.getDoctor(doctorId);
      return doctor;
    } catch (error) {
      throw error;
    }
  }

  public async createDoctor(data: IDoctorCreateWithUserInfoDto): Promise<IDoctor> {
    try {
      const newDoctor = await this.doctorRepository.createDoctor(data)
      return newDoctor;
    } catch (error) {
      throw error;
    }
  }
  public async deleteDoctor(doctorId: string): Promise<IDoctor> {
    try {
      const deletedDoctor = await this.doctorRepository.deleteDoctor(doctorId);
      return deletedDoctor;
    } catch (error) {
      throw error;
    }
  }

  public async updateDoctor(doctorId: string, payload: IDoctorUpdateDto): Promise<IDoctor> {
    try {
      const updatedDoctor = await this.doctorRepository.updateDoctor(doctorId, payload)
      return updatedDoctor;
    } catch (error) {
      throw error;
    }
  }

  public async getDoctorInfos(doctorId: string) {
    try {
      const doctorInfos = await this.doctorRepository.getDoctorInfos(doctorId);
      return doctorInfos;
    } catch (error) {
      throw error;
    }
  }
}
