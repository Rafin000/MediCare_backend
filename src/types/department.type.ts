import { Department } from "@prisma/client"
import { PrismaHospitalDepartmentModel } from "./hospital-department.type"
import { IHospital } from "./hospital.type"

export type IDepartment = {
  id: string,
  name: string,
  description: string | null,
  hospitals?: IHospital[],
}

export type IDepartmentCreateDto = {
  name: string,
  description: string | null
}

export type IDepartmentUpdateDto = Partial<IDepartmentCreateDto>

export type PrismaDepartmentModel = Department & {
  hospitals?: PrismaHospitalDepartmentModel[]
}