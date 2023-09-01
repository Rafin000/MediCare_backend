import { db } from "../db.server";
import { HospitalTransformer } from "../transformer/hospital.transformer";
import { IHospital } from "../types";

export default class HospitalService {

  public async getAllHospitals(): Promise<IHospital[]> {
    try {
      const allRawHospitals = await db.hospitals.findMany();
      const allHospital = allRawHospitals.map((hospital) =>
        HospitalTransformer.getTransformer().transform(hospital)
      )
      return allHospital;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async createHospital(data: Partial<IHospital>): Promise<IHospital> {
    try {
      const newHospital = await db.hospitals.create({
        data: {
          registration_id: data.registrationId,
          name: data.name,
          type: data.type,
          phone: data.phoneNumber,
          email: data.email,
          fax: data.fax,
          clinic_hour: data.clinicHour,
          lab_hour: data.labHour,
          description: data.description
        }
      })
      return HospitalTransformer.getTransformer().transform(newHospital)
    } catch (error) {
      return error;
    }
  }
}