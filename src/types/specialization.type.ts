import { Specialization } from "@prisma/client"
import { PrismaDoctorSpecializationModel } from "./doctor-specialization.type"
import { IDoctor } from "./doctor.type"

export type ISpecialization = {
  id: string,
  name: string,
  description: string | null,
  doctors?: IDoctor[],
}

export type ISpecializationCreateDto = {
  name: string,
  description: string | null
}

export type ISpecializationUpdateDto = Partial<ISpecializationCreateDto>

export type PrismaSpecializationModel = Specialization & {
  doctors?: PrismaDoctorSpecializationModel[]
}