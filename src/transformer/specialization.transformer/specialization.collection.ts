import { Specialization } from "@prisma/client";
import { ISpecialization } from "../../types";
import { CollectionTransformer } from "../transformer";
import specializationResource from "./specialization.resource";

class SpecializationCollection implements CollectionTransformer {
  transformCollection(requestedData: Specialization[]): ISpecialization[] {
    return requestedData.map((specialization) =>
      specializationResource.transform(specialization)
    );
  }
}

const specializationCollection = new SpecializationCollection();

export default specializationCollection;
