import { Doctor, Doctor_Specialization, Specialization } from "@prisma/client"

export type IDoctorSpecialization = {
  doctor_id: string
  specialization_id: string
}

export type PrismaDoctorSpecializationModel = Doctor_Specialization & {
  doctor?: Doctor
  specialization?: Specialization
}