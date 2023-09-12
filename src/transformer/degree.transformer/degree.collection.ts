import { Degree } from "@prisma/client";
import { IDegree, PrismaDegreeModel } from "../../types";
import { CollectionTransformer } from "../transformer";
import degreeResource from "./degree.resource";

class DegreeCollection implements CollectionTransformer {
  transformCollection(requestedData: PrismaDegreeModel[]): IDegree[] {
    return requestedData.map((degree) =>
      degreeResource.transform(degree)
    );
  }
}

const degreeCollection = new DegreeCollection();

export default degreeCollection;
