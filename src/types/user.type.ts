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
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
  phone: string | null
  userType: IUserType | undefined
  dob: string | null
  roles?: IRole[]
  // socials?: ISocial[]
}

export type IUserCreateDto = {
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
  phone: string | null
  userType: IUserType | undefined
  dob: string | null
} 