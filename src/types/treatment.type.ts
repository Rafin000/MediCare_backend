export type ITreatment = {
  id: string,
  type: string,
  description: string | null
}

export type ITreatmentCreateDto = {
  type: string,
  description: string | null
}

export type ITreatmentUpdateDto = Partial<ITreatmentCreateDto>