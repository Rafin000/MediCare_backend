import { IDoctor, PrismaDoctorModel } from "../../types";
import awardResource from "../award.transformer/award.resource";
import degreeResource from "../degree.transformer/degree.resource";
import hospitalResource from "../hospital.transformer/hospital.resource";
import locationResource from "../location.transformer/location.resource";
import specializationResource from "../specialization.transformer/specialization.resource";
import { Transformer } from "../transformer";


class DoctorResource implements Transformer {

  transform(doctor: PrismaDoctorModel): IDoctor {
    return {
      id: doctor.id,
      user_id: doctor.user_id,
      registration_id: doctor.registration_id,
      phone_number: doctor.phone_number,
      biography: doctor.biography,
      is_active: doctor.is_active,
      work_experience: doctor.work_experience,
      hospitals: doctor.hospitals ? doctor.hospitals?.map(hospital_doctor => hospitalResource.transform(hospital_doctor.hospital)) : null,
      specializations: doctor.specializations ? doctor.specializations?.map(doctor_specialization => specializationResource.transform(doctor_specialization.specialization)) : null,
      degrees: doctor.degrees ? doctor.degrees?.map(doctor_degree => degreeResource.transform(doctor_degree.degree)) : null,
      awards: doctor.awards ? doctor.awards?.map(doctor_award => awardResource.transform(doctor_award.award)) : null,
      locations: doctor.locations ? doctor.locations?.map(doctor_location => locationResource.transform(doctor_location.location)) : null,
    }
  }
}

const doctorResource = new DoctorResource()

export default doctorResource;