import { Degree } from "@prisma/client"
import { IDoctor } from "./doctor.type"
import { PrismaDoctorDegreeModel } from "./doctor-degree.type"

export type IDegree = {
  id: string,
  name: string,
  description: string | null,
  doctors?: IDoctor[],
}

export type IDegreeCreateDto = {
  name: string,
  description: string | null
}

export type IDegreeUpdateDto = Partial<IDegreeCreateDto>

export type PrismaDegreeModel = Degree & {
  doctors?: PrismaDoctorDegreeModel[];
}