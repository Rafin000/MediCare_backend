import { Department, Hospital, Hospital_Department } from "@prisma/client"

export type IHospitalDepartment = {
  hospital_id: string
  department_id: string
}

export type PrismaHospitalDepartmentModel = Hospital_Department & {
  hospital?: Hospital
  department?: Department
}