import { IRole } from "../types/role.type"
export interface IUserAddOrRemoveRolesPayload {
  roleIds: string[]
}

enum IUserType {
  USER = "user",
  DOCTOR = "doctor"
}

export interface IUser {
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

export interface IUserCreateDto{
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
  phone: string | null
  userType: IUserType | undefined
  dob: string | null
} 