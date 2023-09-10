import { IRole } from "../types/role.type"
export type IUserAddOrRemoveRolesPayload = {
  roleIds: string[]
}

enum IUserType {
  USER = "user",
  DOCTOR = "doctor"
}

export type IUser = {
  id: string
  first_name: string
  last_name: string
  username: string
  email: string
  password: string
  phone_number: string | null
  user_type: IUserType | undefined
  dob: string | null
  roles?: IRole[],
  // socials?: ISocial[]
}

export type IUserCreateDto = {
  first_name: string
  last_name: string
  username: string
  email: string
  password: string
  phone_number: string | null
  user_type: IUserType | undefined
  dob: string | null
} 