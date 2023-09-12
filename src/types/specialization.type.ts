export type ISpecialization = {
  id: string,
  name: string,
  description: string | null
}

export type ISpecializationCreateDto = {
  name: string,
  description: string | null
}

export type ISpecializationUpdateDto = Partial<ISpecializationCreateDto>