import { ILocation } from "../../types";
import { CollectionTransformer } from "../transformer";
import locationResource from "./location.resource";
import { Location } from "@prisma/client";

class LocationCollection implements CollectionTransformer {
  transformCollection(requestedData: Location[]): ILocation[] {
    return requestedData.map((location) =>
      locationResource.transform(location)
    );
  }
}

const locationCollection = new LocationCollection();

export default locationCollection;
