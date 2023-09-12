import { Award, Doctor, Doctor_Award, } from "@prisma/client"

export type IDoctorAward = {
  doctor_id: string
  award_id: string
}

export type PrismaDoctorAwardModel = Doctor_Award & {
  doctor?: Doctor
  award?: Award
}