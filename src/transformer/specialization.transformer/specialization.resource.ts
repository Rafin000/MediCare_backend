import { ISpecialization, PrismaSpecializationModel } from "../../types";
import doctorResource from "../doctor.transformer/doctor.resource";
import { Transformer } from "../transformer";

class SpecializationResource implements Transformer {
  transform(specialization: PrismaSpecializationModel): ISpecialization {
    return {
      id: specialization.id,
      name: specialization.name,
      description: specialization.description,
      doctors: specialization.doctors ? specialization.doctors?.map(doctor_specialization => doctorResource.transform(doctor_specialization.doctor)) : null,
    };
  }
}

const specializationResource = new SpecializationResource();

export default specializationResource;
