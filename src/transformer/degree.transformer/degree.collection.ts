import { degrees } from "@prisma/client";
import { IDegree } from "../../types";
import { CollectionTransformer } from "../transformer";
import degreeResource from "./degree.resource";

class DegreeCollection implements CollectionTransformer {
  transformCollection(requestedData: degrees[]): IDegree[] {
    return requestedData.map((degree) =>
      degreeResource.transform(degree)
    );
  }
}

const degreeCollection = new DegreeCollection();

export default degreeCollection;
