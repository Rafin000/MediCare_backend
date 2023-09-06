import { Hospital } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import hospitalCollection from "../transformer/hospital.transformer/hospital.collection";
import hospitalResource from "../transformer/hospital.transformer/hospital.resource";
import { IHospital, IHospitalCreateDto } from "../types";

export default class HospitalService extends BaseRepository<DbType>{

  constructor() {
    super(db, 'Hospital')
  }

  public async getAllHospitals(): Promise<IHospital[]> {
    try {
      const allHospital = await this.getAll<IHospital, Hospital>(hospitalCollection.transformCollection);
      return allHospital;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async getHospital(hospitalId: string): Promise<IHospital> {
    try {
      const hospital = await this.get<IHospital, Hospital>(hospitalId, hospitalResource.transform)
      return hospital
    } catch (error) {
      throw error
    }
  }

  public async createHospital(data: Partial<IHospital>): Promise<IHospital> {
    try {
      const newHospital = await this.create<IHospitalCreateDto, IHospital>(
        {
          registration_id: data.registrationId,
          name: data.name,
          type: data.type,
          phone_number: data.phone,
          email: data.email,
          fax: data.fax,
          clinic_hour: data.clinicHour,
          lab_hour: data.labHour,
          description: data.description
        },
        hospitalResource.transform
      )
      return newHospital;
    } catch (error) {
      return error;
    }
  }

  public async deleteHospital(hospitalId: string): Promise<IHospital> {
    try {
      const deletedHospital = await this.delete<IHospital>(hospitalId, hospitalResource.transform);
      return deletedHospital;
    } catch (error) {
      throw error;
    }
  }

  public async updateHospital(hospitalId: string, payload: Partial<IHospital>): Promise<IHospital> {
    try {
      const { name, type, email, fax, phone, description, labHour, clinicHour, registrationId } = payload;
      const updatedHospital = await this.update<IHospital, Hospital>(
        hospitalId,
        {
          ...(name ? { name } : {}),
          ...(type ? { type } : {}),
          ...(email ? { email } : {}),
          ...(phone ? { phone } : {}),
          ...(fax ? { fax } : {}),
          ...(clinicHour ? { clinicHour } : {}),
          ...(labHour ? { labHour } : {}),
          ...(description ? { description } : {}),
          ...(registrationId ? { registrationId } : {}),
        },
        hospitalResource.transform
      )
      return updatedHospital;
    } catch (error) {
      throw error;
    }
  }
}