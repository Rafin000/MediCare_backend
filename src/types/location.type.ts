import { PrismaDoctorLocationModel } from "./doctor-location.type"
import { IDoctor } from "./doctor.type"
import { PrismaHospitalLocationModel } from "./hospital-location.type"
import { IHospital } from "./hospital.type"
import { Location } from "@prisma/client"

export type ILocation = {
  id: string,
  longitude: string,
  latitude: string,
  street: string | null,
  address: string | null,
  country: string | null,
  division: string | null,
  thana: string | null,
  district: string | null,
  hospitals?: IHospital[],
  doctors?: IDoctor[],
}

export type ILocationCreateDto = {
  longitude: string,
  latitude: string,
  street: string | null,
  address: string | null,
  country: string | null,
  division: string | null,
  thana: string | null,
  district: string | null
}

export type ILocationUpdateDto = Partial<ILocationCreateDto>

export type PrismaLocationModel = Location & {
  hospitals?: PrismaHospitalLocationModel[],
  doctors?: PrismaDoctorLocationModel[],
}