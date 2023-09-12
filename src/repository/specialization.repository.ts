import { Specialization } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import specializationCollection from "../transformer/specialization.transformer/specialization.collection";
import specializationResource from "../transformer/specialization.transformer/specialization.resource";
import { ISpecialization, ISpecializationCreateDto, ISpecializationUpdateDto } from "../types";

export default class SpecializationRepository extends BaseRepository<DbType> {
  constructor() {
    super(db, 'Specialization');
  }

  public async getAllSpecializations(): Promise<ISpecialization[]> {
    try {
      const allSpecializations = await this.getAll<ISpecialization, Specialization>(specializationCollection.transformCollection);
      return allSpecializations;
    } catch (error) {
      throw error;
    }
  }

  public async getSpecialization(specializationId: string): Promise<ISpecialization> {
    try {
      const specialization = await this.get<ISpecialization, Specialization>(specializationId, specializationResource.transform);
      return specialization;
    } catch (error) {
      throw error;
    }
  }

  public async createSpecialization(data: ISpecializationCreateDto): Promise<ISpecialization> {
    try {
      const newSpecialization = await this.create<ISpecialization, Specialization>(
        {
          name: data.name,
          description: data.description
        },
        specializationResource.transform
      );
      return newSpecialization;
    } catch (error) {
      throw error;
    }
  }

  public async deleteSpecialization(specializationId: string): Promise<ISpecialization> {
    try {
      const deletedSpecialization = await this.delete<ISpecialization>(specializationId, specializationResource.transform);
      return deletedSpecialization;
    } catch (error) {
      throw error;
    }
  }

  public async updateSpecialization(specializationId: string, payload: ISpecializationUpdateDto): Promise<ISpecialization> {
    try {
      const { name, description } = payload;
      const updatedSpecialization = await this.update<ISpecialization, Specialization>(
        specializationId,
        {
          ...(name ? { name } : {}),
          ...(description ? { description } : {}),

        },
        specializationResource.transform
      );
      return updatedSpecialization;
    } catch (error) {
      throw error;
    }
  }
}
