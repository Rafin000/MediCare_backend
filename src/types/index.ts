import { Request as ExpressRequest } from 'express'
import { IUser } from '../types'

export * from './role.type'
export * from './user.type'
export * from './hospital.type'
export * from './treatment.type'
export * from './department.type'
export interface Request extends ExpressRequest {
  user: IUser

}