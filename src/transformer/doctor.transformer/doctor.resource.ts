import { IDoctor } from "../../types";
import { Transformer } from "../transformer";


class DoctorResource implements Transformer {

  transform(doctor: any): IDoctor {
    return {
      id: doctor.id,
      user_id: doctor.userId,
      registration_id: doctor.registration_Id,
      phone_number: doctor.phone_number,
      biography: doctor.biography,
      is_active: doctor.is_active,
      work_experience: doctor.work_experience
    }
  }
}

const doctorResource = new DoctorResource()

export default doctorResource;