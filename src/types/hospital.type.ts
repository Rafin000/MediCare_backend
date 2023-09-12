import { Hospital, Hospital_Doctor, Hospital_Location } from "@prisma/client"
import { PrismaHospitalTreatmentModel } from "./hospital-treatment.type"
import { PrismaHospitalDepartmentModel } from "./hospital-department.type"
import { PrismaHospitalDoctorModel } from "./hospital-doctor.type"
import { IDoctor } from "./doctor.type"
import { ITreatment } from "./treatment.type"
import { IDepartment } from "./department.type"
import { ILocation } from "./location.type"
import { PrismaHospitalLocationModel } from "./hospital-location.type"

export type IHospital = {
  id: string,
  registration_id: string,
  type: string,
  name: string,
  phone_number: string | null,
  email: string,
  fax: string | null,
  clinic_hour: string | null,
  lab_hour: string | null,
  description: string | null,
  doctors?: IDoctor[],
  treatments?: ITreatment[],
  departments?: IDepartment[],
  locations?: ILocation[]
}

export type IHospitalCreateDto = {
  registration_id: string,
  type: string,
  name: string,
  phone_number: string | null,
  email: string,
  fax: string | null,
  clinic_hour: string | null,
  lab_hour: string | null,
  description: string | null
}

export type IHospitalUpdateDto = Partial<IHospitalCreateDto>

export type PrismaHospitalModel = Hospital & {
  doctors?: PrismaHospitalDoctorModel[],
  treatments?: PrismaHospitalTreatmentModel[],
  departments?: PrismaHospitalDepartmentModel[],
  locations?: PrismaHospitalLocationModel[]
}