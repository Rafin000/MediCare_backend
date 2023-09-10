import { Doctor } from "@prisma/client";
import doctorCollection from "../transformer/doctor.transformer/doctor.collection";
import doctorResource from "../transformer/doctor.transformer/doctor.resource";
import { IDoctor, IDoctorCreateDto } from "../types";
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
      const allDoctors = await this.doctorRepository.getAll<IDoctor, Doctor>(doctorCollection.transformCollection);
      return allDoctors;
    } catch (error) {
      throw error;
    }
  }

  public async getDoctor(doctorId: string): Promise<IDoctor> {
    try {
      const doctor = await this.doctorRepository.get<IDoctor, Doctor>(doctorId, doctorResource.transform);
      return doctor;
    } catch (error) {
      throw error;
    }
  }

  public async createDoctor(data: IDoctorCreateDto): Promise<any> {
    try {
      // if(!userId){
      //  const newUser =  await this.userRepository.createUser(data);
      //  userId = newUser.id
      // }
      const newDoctor = await this.doctorRepository.create<IDoctor, Doctor>(
        {
          user_id: data.user_id,
          is_active: data.is_active,
          registration_id: data.registration_id
        },
        doctorResource.transform
      );
      return newDoctor;
    } catch (error) {
      throw error;
    }
  }
  public async deleteDoctor(doctorId: string): Promise<IDoctor> {
    try {
      const deletedDoctor = await this.doctorRepository.delete<IDoctor>(doctorId, doctorResource.transform);
      return deletedDoctor;
    } catch (error) {
      throw error;
    }
  }

  public async updateDoctor(doctorId: string, payload: Partial<IDoctor>): Promise<IDoctor> {
    try {
      const { biography, is_active, work_experience, phone_number, registration_id } = payload;
      const updatedDoctor = await this.doctorRepository.update<IDoctor, Doctor>(
        doctorId,
        {
          ...(is_active ? { is_active } : {}),
          ...(work_experience ? { work_experience } : {}),
          ...(biography ? { biography } : {}),
          ...(phone_number ? { phone_number } : {}),
          ...(registration_id ? { registration_id } : {}),
        },
        doctorResource.transform
      );
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
