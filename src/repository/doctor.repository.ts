import { Doctor } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import { IDoctor, IDoctorCreateDto } from "../types";
import doctorCollection from "../transformer/doctor.transformer/doctor.collection";
import doctorResource from "../transformer/doctor.transformer/doctor.resource";

export default class DoctorRepository extends BaseRepository<DbType> {
  constructor() {
    super(db, 'Doctor');
  }

  public async getAllDoctors(): Promise<IDoctor[]> {
    try {
      const allDoctors = await this.getAll<IDoctor, Doctor>(doctorCollection.transformCollection);
      return allDoctors;
    } catch (error) {
      throw error;
    }
  }

  public async getDoctor(doctorId: string): Promise<IDoctor> {
    try {
      const doctor = await this.get<IDoctor, Doctor>(doctorId, doctorResource.transform);
      return doctor;
    } catch (error) {
      throw error;
    }
  }

  public async createDoctor(data: IDoctorCreateDto): Promise<IDoctor> {
    try {
      // if(!userId){
      //  const newUser =  await this.userRepository.createUser(data);
      //  userId = newUser.id
      // }
      const newDoctor = await this.create<IDoctor, Doctor>(
        {
          user_id: data.user_id,
          is_active: data.is_active,
          registration_id: data.registration_id,
          phone_number: data.phone_number,
          biography: data.biography,
          work_experience: data.work_experience
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
      const deletedDoctor = await this.delete<IDoctor>(doctorId, doctorResource.transform);
      return deletedDoctor;
    } catch (error) {
      throw error;
    }
  }

  public async updateDoctor(doctorId: string, payload: Partial<IDoctor>): Promise<IDoctor> {
    try {
      const { biography, is_active, work_experience, phone_number, registration_id } = payload;
      const updatedDoctor = await this.update<IDoctor, Doctor>(
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
      const doctorInfos = await db.doctor_Info.findMany({
        where: {
          doctor_id: doctorId
        }
      });
      return doctorInfos;
    } catch (error) {
      throw error;
    }
  }
}
