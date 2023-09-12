import { Hospital } from "@prisma/client";
import { DbType, db } from "../db.server";
import hospitalResource from "../transformer/hospital.transformer/hospital.resource";
import { IHospital, IHospitalCreateDto, IHospitalUpdateDto, PaginateResponse, PaginationQueryParams } from "../types";
import BaseRepository from "./base.repository";
import hospitalCollection from "../transformer/hospital.transformer/hospital.collection";
import { buildIncludesObject, buildWhereObject } from "../utils/utils";
import doctorCollection from "../transformer/doctor.transformer/doctor.collection";


export default class HospitalRepository extends BaseRepository<DbType>{
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


  public async getHospitals({
    page,
    limit,
    filters,
    includes = '',
  }: PaginationQueryParams): Promise<PaginateResponse<IHospital>> {
    try {
      const includeArray = includes.split(',');

      const response = await this.paginate({
        page,
        pageSize: limit,
        transformCollection: hospitalCollection.transformCollection,
        options: {
          includes: buildIncludesObject(includeArray ?? []),
          where: buildWhereObject(filters),
        },
      });
      return response;
    } catch (error) {
      throw error;
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

  public async createHospital(data: IHospitalCreateDto): Promise<IHospital> {
    try {
      const newHospital = await this.create<IHospital, Hospital>(
        {
          registration_id: data.registration_id,
          name: data.name,
          type: data.type,
          phone_number: data.phone_number,
          email: data.email,
          fax: data.fax,
          clinic_hour: data.clinic_hour,
          lab_hour: data.lab_hour,
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

  public async updateHospital(hospitalId: string, payload: IHospitalUpdateDto): Promise<IHospital> {
    try {
      const { name, type, email, fax, phone_number, description, lab_hour, clinic_hour, registration_id } = payload;
      const updatedHospital = await this.update<IHospital, Hospital>(
        hospitalId,
        {
          ...(name ? { name } : {}),
          ...(type ? { type } : {}),
          ...(email ? { email } : {}),
          ...(phone_number ? { phone_number } : {}),
          ...(fax ? { fax } : {}),
          ...(clinic_hour ? { clinic_hour } : {}),
          ...(lab_hour ? { lab_hour } : {}),
          ...(description ? { description } : {}),
          ...(registration_id ? { registration_id } : {}),
        },
        hospitalResource.transform
      )
      return updatedHospital;
    } catch (error) {
      throw error;
    }
  }
}