import { Hospital, Hospital_Location } from "@prisma/client"

export type IHospitalLocation = {
  hospital_id: string,
  location_id: string
}

export type PrismaHospitalLocationModel = Hospital_Location & {
  hospital: Hospital
  location: Location
}