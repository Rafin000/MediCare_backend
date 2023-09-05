import { ILocation } from "../../types";
import { Transformer } from "../transformer";

class LocationResource implements Transformer {
  transform(location: any): ILocation {
    return {
      id: location.id,
      latitude: location.latitude,
      longitude: location.longitude,
      country: location.country,
      street: location.street,
      thana: location.thana,
      district: location.district,
      division: location.division,
      address: location.address
    };
  }
}

const locationResource = new LocationResource();

export default locationResource;
