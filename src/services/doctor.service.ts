import { Doctor } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import doctorCollection from "../transformer/doctor.transformer/doctor.collection";
import doctorResource from "../transformer/doctor.transformer/doctor.resource";
import { IDoctor, IDoctorCreateDto } from "../types";

export default class DoctorService extends BaseRepository<DbType> {
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

  public async getDoctorInfos(doctorId: string) {
    try {
      const doctorInfos = await db.doctor_info.findMany({
        where: {
          doctor_id: doctorId
        }
      });
      return doctorInfos;
    } catch (error) {
      throw error;
    }
  }

  public async createDoctor(data: Partial<IDoctor>, userId: string): Promise<IDoctor> {
    try {
      const newDoctor = await this.create<IDoctorCreateDto, IDoctor>(
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
      const deletedDoctor = await this.delete<IDoctor>(doctorId, doctorResource.transform);
      return deletedDoctor;
    } catch (error) {
      throw error;
    }
  }

  public async updateDoctor(doctorId: string, payload: Partial<IDoctor>): Promise<IDoctor> {
    try {
      const { biography, isActive, workExperience, phoneNumber, registrationId } = payload;
      const updatedDoctor = await this.update<IDoctor, Doctor>(
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
}
