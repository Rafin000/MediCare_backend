export type ICategory = {
  id: string,
  name: string,
  description: string | null
}

export type ICategoryCreateDto = {
  name: string,
  description: string | null
}

export type ICategoryUpdateDto = Partial<ICategoryCreateDto>