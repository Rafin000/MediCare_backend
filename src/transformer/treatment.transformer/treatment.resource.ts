import { ITreatment, PrismaTreatmentModel } from "../../types";
import { Transformer } from "../transformer";
import hospitalCollection from "../hospital.transformer/hospital.collection";
import hospitalResource from "../hospital.transformer/hospital.resource";


class TreatmentResource implements Transformer {
  transform(treatment: PrismaTreatmentModel): ITreatment {
    return {
      id: treatment.id,
      type: treatment.type,
      description: treatment.description,
      hospitals: treatment.hospitals ? treatment.hospitals?.map(hospital_treatment => hospitalResource.transform(hospital_treatment.hospital)) : null,
    };
  }
}

const treatmentResource = new TreatmentResource();

export default treatmentResource;
