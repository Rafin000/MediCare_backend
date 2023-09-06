export type IDepartment = {
  id: string,
  name: string,
  description: string | null
}

export type IDepartmentCreateDto = {
  name: string,
  description: string | null
}