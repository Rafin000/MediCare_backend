import { Doctor } from "@prisma/client";
import doctorCollection from "../transformer/doctor.transformer/doctor.collection";
import doctorResource from "../transformer/doctor.transformer/doctor.resource";
import { IDoctor, IDoctorCreateDto, IDoctorWithUserInfo } from "../types";
import DoctorRepository from "../repository/doctor.repository";
import UserRepository from "../repository/user.repository";

export default class DoctorService {
  protected readonly doctorRepo: DoctorRepository
  protected readonly userRepo: UserRepository

  constructor(){
    this.doctorRepo = new DoctorRepository()
  }

  public async getAllDoctors(): Promise<IDoctor[]> {
    try {
      const allDoctors = await this.doctorRepo.getAll<IDoctor, Doctor>(doctorCollection.transformCollection);
      return allDoctors;
    } catch (error) {
      throw error;
    }
  }

  public async getDoctor(doctorId: string): Promise<IDoctor> {
    try {
      const doctor = await this.doctorRepo.get<IDoctor, Doctor>(doctorId, doctorResource.transform);
      return doctor;
    } catch (error) {
      throw error;
    }
  }

  public async createDoctor(data: Partial<IDoctorWithUserInfo>, userId?: string): Promise<IDoctor> {
    try {
      if(!userId){
       const newUser =  await this.userRepo.createUser(data);
       userId = newUser.id
      }
      const newDoctor = await this.doctorRepo.create<IDoctorCreateDto, IDoctor>(
        {
          user_id: userId,
          biography: data.biography,
          phone_number: data.phoneNumber,
          registration_id: data.registrationId,
          is_active: data.isActive,
          work_experience: data.workExperience
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
      const deletedDoctor = await this.doctorRepo.delete<IDoctor>(doctorId, doctorResource.transform);
      return deletedDoctor;
    } catch (error) {
      throw error;
    }
  }

  public async updateDoctor(doctorId: string, payload: Partial<IDoctor>): Promise<IDoctor> {
    try {
      const { biography, isActive, workExperience, phoneNumber, registrationId } = payload;
      const updatedDoctor = await this.doctorRepo.update<IDoctor, Doctor>(
        doctorId,
        {
          ...(isActive ? { isActive } : {}),
          ...(workExperience ? { workExperience } : {}),
          ...(biography ? { biography } : {}),
          ...(phoneNumber ? { phoneNumber } : {}),
          ...(registrationId ? { registrationId } : {}),
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
      const doctorInfos = await this.doctorRepo.getDoctorInfos(doctorId);
      return doctorInfos;
    } catch (error) {
      throw error;
    }
  }
}
