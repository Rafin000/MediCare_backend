import { ISpecialization, PrismaSpecializationModel } from "../../types";
import { CollectionTransformer } from "../transformer";
import specializationResource from "./specialization.resource";


class SpecializationCollection implements CollectionTransformer {
  transformCollection(requestedData: PrismaSpecializationModel[]): ISpecialization[] {
    return requestedData.map((specialization) =>
      specializationResource.transform(specialization)
    );
  }
}

const specializationCollection = new SpecializationCollection();

export default specializationCollection;
