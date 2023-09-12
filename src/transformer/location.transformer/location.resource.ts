import { ILocation, PrismaLocationModel } from "../../types";
import doctorResource from "../doctor.transformer/doctor.resource";
import hospitalResource from "../hospital.transformer/hospital.resource";
import { Transformer } from "../transformer";

class LocationResource implements Transformer {
  transform(location: PrismaLocationModel): ILocation {
    return {
      id: location.id,
      latitude: location.latitude,
      longitude: location.longitude,
      country: location.country,
      street: location.street,
      thana: location.thana,
      district: location.district,
      division: location.division,
      address: location.address,
      doctors: location.doctors ? location.doctors?.map(doctor_location => doctorResource.transform(doctor_location.doctor)) : null,
      hospitals: location.hospitals ? location.hospitals?.map(hospital_location => hospitalResource.transform(hospital_location.hospital)) : null,
    };
  }
}

const locationResource = new LocationResource();

export default locationResource;
