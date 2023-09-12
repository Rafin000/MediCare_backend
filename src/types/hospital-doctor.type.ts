import { Doctor, Hospital, Hospital_Doctor } from "@prisma/client"

export type IHospitalDoctor = {
  hospital_id: string,
  doctor_id: string
}

export type PrismaHospitalDoctorModel = Hospital_Doctor & {
  hospital: Hospital,
  doctor: Doctor
}