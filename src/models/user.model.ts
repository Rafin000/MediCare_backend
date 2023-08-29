import { IRole } from "../types/role.type"

export interface IUser {
  id: string
  firstName: string
  lastName: string
  userName: string | null
  email: string
  dob: string | null
  fathers_name: string | null
  mothers_name: string | null
  blood_group: string | null
  contact_number: string | null
  emergency_contact_number: string | null
  nid: string | null
  present_address: string | null
  permanent_address: string | null
  tshirt: string | null
  tin_number: string | null
  gender: string | null
  password: string
  roles?: IRole[]
  marital_status: string | null
  profile_picture: string | null
  religion: string | null
}