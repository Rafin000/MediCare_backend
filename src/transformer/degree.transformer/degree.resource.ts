import { IDegree } from "../../types";
import { Transformer } from "../transformer";

class DegreeResource implements Transformer {
  transform(degree: any): IDegree {
    return {
      id: degree.id,
      name: degree.name,
      description: degree.description,
    };
  }
}

const degreeResource = new DegreeResource();

export default degreeResource;
