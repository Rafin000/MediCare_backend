export type IRole = {
  name: string,
  description: string | null
  id: string
}


export type IRoleCreateDto = {
  name: string,
  description: string | null
}

export type IRoleUpdateDto = Partial<IRoleCreateDto>