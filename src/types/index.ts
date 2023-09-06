import { Request as ExpressRequest } from 'express'
import { IUser } from '../types'

export * from './role.type'
export * from './user.type'
export * from './hospital.type'
export * from './treatment.type'
export * from './department.type'
export * from './degree.type'
export * from './specialization.type'
export * from './award.type'
export * from './doctor.type'
export * from './category.type'
export * from './location.type'
export interface Request extends ExpressRequest {
  user: IUser

}