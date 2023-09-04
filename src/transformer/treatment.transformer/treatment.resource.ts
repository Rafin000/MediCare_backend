import { ITreatment } from "../../types";
import { Transformer } from "../transformer";

class TreatmentResource implements Transformer {
  transform(treatment: any): ITreatment {
    return {
      id: treatment.id,
      type: treatment.type,
      description: treatment.description,
    };
  }
}

const treatmentResource = new TreatmentResource();

export default treatmentResource;
