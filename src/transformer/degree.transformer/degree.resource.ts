import { IDegree, PrismaDegreeModel } from "../../types";
import doctorResource from "../doctor.transformer/doctor.resource";
import { Transformer } from "../transformer";

class DegreeResource implements Transformer {
  transform(degree: PrismaDegreeModel): IDegree {
    return {
      id: degree.id,
      name: degree.name,
      description: degree.description,
      doctors: degree.doctors ? degree.doctors?.map(doctor_degree => doctorResource.transform(doctor_degree.doctor)) : null,
    };
  }
}

const degreeResource = new DegreeResource();

export default degreeResource;
