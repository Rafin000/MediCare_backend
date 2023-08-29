import { IRole } from "../types/role.type"
export interface IUserAddOrRemoveRolesPayload {
  roleIds: string[]
}

export enum IUserType {
  user,
  doctor
}

export interface IUser {
  id: string
  firstName: string
  lastName: string
  userName: string
  email: string
  password: string
  phone: string | null
  userType: IUserType
  dob: string | null
  roles?: IRole[]
  // socials?: ISocial[]
}