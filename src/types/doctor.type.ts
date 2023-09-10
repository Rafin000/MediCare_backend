import { JsonArray } from "@prisma/client/runtime/library"
import { IUser, IUserCreateDto } from "./user.type"

export type IDoctor = {
  id: string,
  user_id: string,
  phone_number: string | null,
  biography: string | null,
  is_active: boolean,
  registration_id: string,
  work_experience: JsonArray | null
}

export type IDoctorCreateWithUserInfoDto = IDoctorCreateDto & IUserCreateDto;

export type IDoctorCreateDto = {
  user_id: string | undefined,
  phone_number: string | null,
  biography: string | null,
  is_active: boolean,
  registration_id: string,
  work_experience: JsonArray | null
} 