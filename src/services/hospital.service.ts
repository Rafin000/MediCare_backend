import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import hospitalCollection from "../transformer/hospital.transformer/hospital.collection";
import hospitalResource from "../transformer/hospital.transformer/hospital.resource";
import { IHospital } from "../types";

export default class HospitalService extends BaseRepository<DbType>{

  constructor() {
    super(db, 'hospitals')
  }

  public async getAllHospitals(): Promise<IHospital[]> {
    try {
      const allHospital = await this.getAll(hospitalCollection.transformCollection);
      return allHospital;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async createHospital(data: Partial<IHospital>): Promise<IHospital> {
    try {
      const newHospital = await this.create(
        {
          registration_id: data.registration_id,
          name: data.name,
          type: data.type,
          phone: data.phone,
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
}