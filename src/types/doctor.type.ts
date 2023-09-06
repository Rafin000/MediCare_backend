import { JsonArray } from "@prisma/client/runtime/library"
import { IUser } from "./user.type"

export type IDoctor = {
  id: string,
  userId: string,
  phoneNumber: string | null,
  biography: string | null,
  isActive: boolean,
  registrationId: string,
  workExperience: JsonArray | null
}

export type IDoctorWithUserInfo = IDoctor & IUser

export type IDoctorCreateDto = {
  user_id: string | undefined,
  phone_number: string | null,
  biography: string | null,
  is_active: boolean,
  registration_id: string,
  work_experience: JsonArray | null
}