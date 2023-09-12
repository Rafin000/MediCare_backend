import { Hospital, Hospital_Treatment, Treatment } from "@prisma/client"
import { IHospital } from "./hospital.type"
import { PrismaHospitalTreatmentModel } from "./hospital-treatment.type"

export type ITreatment = {
  id: string,
  type: string,
  description: string | null
  hospitals?: IHospital[]
}

export type ITreatmentCreateDto = {
  type: string,
  description: string | null
}

export type ITreatmentUpdateDto = Partial<ITreatmentCreateDto>

export type PrismaTreatmentModel = Treatment & {
  hospitals?: PrismaHospitalTreatmentModel[];
};