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
export * from './user-role.type'
export interface Request extends ExpressRequest {
  user: IUser
}


export type USER_TYPE = typeof USER_TYPE_VALUES[number]


export interface PaginateResponse<T> {
  data: T[];
  meta: {
    totalItems: number;
    currentPage: number;
    perPage: number;
    totalPages: number;
  };
}


export type PaginationQueryParams = {
  filters?: Record<string, any>;
  fields?: string;
  sorts?: string;
  search?: string;
  includes?: string;
  page?: number;
  limit?: number;
};