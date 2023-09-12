import { Role } from "@prisma/client"
import { PrismaUserRoleModel } from "./user-role.type"
import { IUser } from "./user.type"

export type IRole = {
  name: string,
  description: string | null
  id: string,
  users?: IUser[],
}


export type IRoleCreateDto = {
  name: string,
  description: string | null
}

export type IRoleUpdateDto = Partial<IRoleCreateDto>

export type PrismaRoleModel = Role & {
  users?: PrismaUserRoleModel[]
}