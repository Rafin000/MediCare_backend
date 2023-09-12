import { IAward, PrismaAwardModel } from "../../types";
import doctorResource from "../doctor.transformer/doctor.resource";
import { Transformer } from "../transformer";

class AwardResource implements Transformer {
  transform(award: PrismaAwardModel): IAward {
    return {
      id: award.id,
      name: award.name,
      description: award.description,
      doctors: award.doctors ? award.doctors?.map(doctor_award => doctorResource.transform(doctor_award.doctor)) : null,
    };
  }
}

const awardResource = new AwardResource();

export default awardResource;
