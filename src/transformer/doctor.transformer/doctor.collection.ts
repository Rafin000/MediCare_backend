import { Doctor } from "@prisma/client";
import { IDoctor } from "../../types";
import { CollectionTransformer } from "../transformer";
import doctorResource from "./doctor.resource";

class DoctorCollection implements CollectionTransformer {
  transformCollection(requestedData: Doctor[]): IDoctor[] {
    return requestedData.map((doctor) =>
      doctorResource.transform(doctor)
    );
  }
}

const doctorCollection = new DoctorCollection()

export default doctorCollection;