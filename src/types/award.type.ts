import { Award } from "@prisma/client"
import { PrismaDoctorAwardModel } from "./doctor-award.type"
import { IDoctor } from "./doctor.type"

export type IAward = {
  id: string,
  name: string,
  description: string | null,
  doctors?: IDoctor[],
}

export type IAwardCreateDto = {
  name: string,
  description: string | null
}

export type IAwardUpdateDto = Partial<IAwardCreateDto>

export type PrismaAwardModel = Award & {
  doctors?: PrismaDoctorAwardModel[],
}