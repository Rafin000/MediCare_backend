import { Award } from "@prisma/client";
import { IAward, PrismaAwardModel } from "../../types";
import { CollectionTransformer } from "../transformer";
import awardResource from "./award.resource";

class AwardCollection implements CollectionTransformer {
  transformCollection(requestedData: PrismaAwardModel[]): IAward[] {
    return requestedData.map((award) =>
      awardResource.transform(award)
    );
  }
}

const awardCollection = new AwardCollection();

export default awardCollection;
