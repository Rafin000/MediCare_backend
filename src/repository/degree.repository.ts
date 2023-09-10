import { Degree } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import degreeCollection from "../transformer/degree.transformer/degree.collection";
import degreeResource from "../transformer/degree.transformer/degree.resource";
import { IDegree, IDegreeCreateDto } from "../types";

export default class DegreeRepository extends BaseRepository<DbType> {
  constructor() {
    super(db, 'Degree');
  }

  public async getAllDegrees(): Promise<IDegree[]> {
    try {
      const allDegrees = await this.getAll<IDegree, Degree>(degreeCollection.transformCollection);
      return allDegrees;
    } catch (error) {
      throw error;
    }
  }

  public async getDegree(degreeId: string): Promise<IDegree> {
    try {
      const degree = await this.get<IDegree, Degree>(degreeId, degreeResource.transform);
      return degree;
    } catch (error) {
      throw error;
    }
  }

  public async createDegree(data: IDegreeCreateDto): Promise<IDegree> {
    try {
      const newDegree = await this.create<IDegree, Degree>(
        {
          name: data.name,
          description: data.description
        },
        degreeResource.transform
      );
      return newDegree;
    } catch (error) {
      throw error;
    }
  }

  public async deleteDegree(degreeId: string): Promise<IDegree> {
    try {
      const deletedDegree = await this.delete<IDegree>(degreeId, degreeResource.transform);
      return deletedDegree;
    } catch (error) {
      throw error;
    }
  }

  public async updateDegree(degreeId: string, payload: Partial<IDegree>): Promise<IDegree> {
    try {
      const { name, description } = payload;
      const updatedDegree = await this.update<IDegree, Degree>(
        degreeId,
        {
          ...(name ? { name } : {}),
          ...(description ? { description } : {}),
        },
        degreeResource.transform
      );
      return updatedDegree;
    } catch (error) {
      throw error;
    }
  }
}