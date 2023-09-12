import { Degree, Doctor, Doctor_Degree } from "@prisma/client"

export type IDoctorDegree = {
  doctor_id: string
  degree_id: string
}

export type PrismaDoctorDegreeModel = Doctor_Degree & {
  doctor?: Doctor
  degree?: Degree
}