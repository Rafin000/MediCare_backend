import { JsonArray, JsonValue } from "@prisma/client/runtime/library"
import { IUserCreateDto } from "./user.type"
import { Doctor } from "@prisma/client"
import { PrismaHospitalDoctorModel } from "./hospital-doctor.type"
import { PrismaDoctorAwardModel } from "./doctor-award.type"
import { IDegree } from "./degree.type"
import { PrismaDoctorLocationModel } from "./doctor-location.type"
import { PrismaDoctorSpecializationModel } from "./doctor-specialization.type"
import { IHospital } from "./hospital.type"
import { ISpecialization } from "./specialization.type"
import { IAward } from "./award.type"
import { ILocation } from "./location.type"
import { PrismaDoctorDegreeModel } from "./doctor-degree.type"

export type IDoctor = {
  id: string,
  user_id: string,
  phone_number: string | null,
  biography: string | null,
  is_active: boolean,
  registration_id: string,
  work_experience: JsonValue | null,
  hospitals?: IHospital[],
  specializations?: ISpecialization[],
  degrees?: IDegree[],
  awards?: IAward[],
  locations?: ILocation[],
}

export type IDoctorCreateDto = {
  user_id?: string,
  phone_number: string | null,
  biography: string | null,
  is_active: boolean,
  registration_id: string,
  work_experience: JsonArray | null
}

export type IDoctorUpdateDto = Partial<IDoctorCreateDto>

export type IDoctorCreateWithUserInfoDto = IDoctorCreateDto & IUserCreateDto;


export type PrismaDoctorModel = Doctor & {
  hospitals?: PrismaHospitalDoctorModel[],
  awards?: PrismaDoctorAwardModel[],
  degrees?: PrismaDoctorDegreeModel[],
  locations?: PrismaDoctorLocationModel[],
  specializations?: PrismaDoctorSpecializationModel[],
}