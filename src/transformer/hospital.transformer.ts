import { IHospital } from "../types";
import { Transformer } from "./transformer";

export class HospitalTransformer implements Transformer {
  static getTransformer() {
    return new HospitalTransformer();
  }
  transform(hospital: any): IHospital {
    return {
      id: hospital.id,
      name: hospital.name,
      type: hospital.type,
      registrationId: hospital.registrationId,
      phoneNumber: hospital.phoneNumber,
      email: hospital.email,
      fax: hospital.fax,
      clinicHour: hospital.clinicHour,
      labHour: hospital.labHour,
      description: hospital.description
    }
  }
}