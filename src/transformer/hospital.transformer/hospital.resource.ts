import { IHospital, PrismaHospitalModel } from "../../types";
import departmentResource from "../department.transformer/department.resource";
import doctorResource from "../doctor.transformer/doctor.resource";
import locationResource from "../location.transformer/location.resource";
import { Transformer } from "../transformer";
import treatmentResource from "../treatment.transformer/treatment.resource";


class HospitalResource implements Transformer {

  transform(hospital: PrismaHospitalModel): IHospital {
    return {
      id: hospital.id,
      name: hospital.name,
      type: hospital.type,
      registration_id: hospital.registration_id,
      phone_number: hospital.phone_number,
      email: hospital.email,
      fax: hospital.fax,
      clinic_hour: hospital.clinic_hour,
      lab_hour: hospital.lab_hour,
      description: hospital.description,
      doctors: hospital.doctors ? hospital.doctors?.map(hospital_doctor => doctorResource.transform(hospital_doctor.doctor)) : null,
      departments: hospital.departments ? hospital.departments?.map(hospital_department => departmentResource.transform(hospital_department.department)) : null,
      treatments: hospital.treatments ? hospital.treatments?.map(hospital_treatment => treatmentResource.transform(hospital_treatment.treatment)) : null,
      locations: hospital.locations ? hospital.locations?.map(hospital_location => locationResource.transform(hospital_location.location)) : null,
    }
  }
}

const hospitalResource = new HospitalResource()

export default hospitalResource;