import { ISpecialization } from "../../types";
import { Transformer } from "../transformer";

class SpecializationResource implements Transformer {
  transform(specialization: any): ISpecialization {
    return {
      id: specialization.id,
      name: specialization.name,
      description: specialization.description,
    };
  }
}

const specializationResource = new SpecializationResource();

export default specializationResource;
