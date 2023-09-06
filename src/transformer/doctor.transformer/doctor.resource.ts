import { IDoctor } from "../../types";
import { Transformer } from "../transformer";


class DoctorResource implements Transformer {

  transform(doctor: any): IDoctor {
    return {
      id: doctor.id,
      userId: doctor.userId,
      registrationId: doctor.registration_Id,
      phoneNumber: doctor.phone_number,
      biography: doctor.biography,
      isActive: doctor.is_active,
      workExperience: doctor.work_experience
    }
  }
}

const doctorResource = new DoctorResource()

export default doctorResource;