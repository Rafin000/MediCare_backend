import { awards } from "@prisma/client";
import { IAward } from "../../types";
import { CollectionTransformer } from "../transformer";
import awardResource from "./award.resource";

class AwardCollection implements CollectionTransformer {
  transformCollection(requestedData: awards[]): IAward[] {
    return requestedData.map((award) =>
      awardResource.transform(award)
    );
  }
}

const awardCollection = new AwardCollection();

export default awardCollection;
