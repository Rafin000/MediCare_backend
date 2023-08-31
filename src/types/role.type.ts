export type IRole = {
  name: string,
  description: string | null
  id: string
}

export interface IRoleUpdateDto extends Partial<IRole> {

}
