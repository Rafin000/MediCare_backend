import { treatments } from "@prisma/client";
import { ITreatment } from "../../types";
import { CollectionTransformer } from "../transformer";
import treatmentResource from "./treatment.resource";

class TreatmentCollection implements CollectionTransformer {
  transformCollection(requestedData: treatments[]): ITreatment[] {
    return requestedData.map((role) =>
      treatmentResource.transform(role)
    );
  }
}

const treatmentCollection = new TreatmentCollection()

export default treatmentCollection;