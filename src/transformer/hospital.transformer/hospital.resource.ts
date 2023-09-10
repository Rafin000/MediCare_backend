import { IHospital } from "../../types";
import { Transformer } from "../transformer";


class HospitalResource implements Transformer {

  transform(hospital: any): IHospital {
    return {
      id: hospital.id,
      name: hospital.name,
      type: hospital.type,
      registration_id: hospital.registrationId,
      phone: hospital.phoneNumber,
      email: hospital.email,
      fax: hospital.fax,
      clinic_hour: hospital.clinicHour,
      lab_hour: hospital.labHour,
      description: hospital.description
    }
  }
}

const hospitalResource = new HospitalResource()

export default hospitalResource;