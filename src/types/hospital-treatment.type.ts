import { Hospital, Hospital_Treatment, Treatment } from "@prisma/client"

export type IHospitalTreatment = {
  hospital_id: string
  treatment_id: string
}

export type PrismaHospitalTreatmentModel = Hospital_Treatment & {
  hospital?: Hospital
  treatment?: Treatment
}