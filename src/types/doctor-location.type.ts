import { Doctor, Doctor_Location } from "@prisma/client"

export type IDoctorLocation = {
  doctor_id: string,
  location_id: string
}

export type PrismaDoctorLocationModel = Doctor_Location & {
  doctor: Doctor
  location: Location
}