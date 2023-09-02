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
          registrationId: data.registrationId,
          name: data.name,
          type: data.type,
          phoneNumber: data.phoneNumber,
          email: data.email,
          fax: data.fax,
          clinicHour: data.clinicHour,
          labHour: data.labHour,
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