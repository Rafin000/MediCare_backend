import { Treatment } from "@prisma/client";
import { ITreatment, PrismaTreatmentModel } from "../../types";
import { CollectionTransformer } from "../transformer";
import treatmentResource from "./treatment.resource";

class TreatmentCollection implements CollectionTransformer {
  transformCollection(requestedData: PrismaTreatmentModel[]): ITreatment[] {
    return requestedData.map((role) =>
      treatmentResource.transform(role)
    );
  }
}

const treatmentCollection = new TreatmentCollection()

export default treatmentCollection;