import { IAward } from "../../types";
import { Transformer } from "../transformer";

class AwardResource implements Transformer {
  transform(award: any): IAward {
    return {
      id: award.id,
      name: award.name,
      description: award.description,
    };
  }
}

const awardResource = new AwardResource();

export default awardResource;
