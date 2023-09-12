import { User, User_Role } from "@prisma/client"
import { IRole, PrismaRoleModel } from "../types/role.type"
import { PrismaUserRoleModel, USER_TYPE } from "."
export type IUserAddOrRemoveRolesPayload = {
  roleIds: string[]
}


export type IUser = {
  id: string
  first_name: string
  last_name: string
  username: string
  email: string
  password: string
  phone_number: string | null
  user_type?: USER_TYPE
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
  user_type?: USER_TYPE
  dob: string | null
}

export type IUserUpdateDto = Partial<IUserCreateDto>

export type PrismaUserModel = User & {
  roles?: PrismaUserRoleModel[];
};