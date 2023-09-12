export type IDegree = {
  id: string,
  name: string,
  description: string | null
}

export type IDegreeCreateDto = {
  name: string,
  description: string | null
}

export type IDegreeUpdateDto = Partial<IDegreeCreateDto>