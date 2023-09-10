export type IAward = {
  id: string,
  name: string,
  description: string | null
}

export type IAwardCreateDto = {
  name: string,
  description: string | null
}