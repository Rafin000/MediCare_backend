import { Hospital } from "@prisma/client";
import { IHospital } from "../../types";
import { CollectionTransformer } from "../transformer";
import roleResource from "./hospital.resource";

class HospitalCollection implements CollectionTransformer {
  transformCollection(requestedData: Hospital[]): IHospital[] {
    return requestedData.map((role) =>
      roleResource.transform(role)
    );
  }
}

const hospitalCollection = new HospitalCollection()

export default hospitalCollection;