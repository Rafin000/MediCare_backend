import { Treatment } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import treatmentCollection from "../transformer/treatment.transformer/treatment.collection";
import treatmentResource from "../transformer/treatment.transformer/treatment.resource";
import { ITreatment, ITreatmentCreateDto } from "../types";

export default class TreatmentService extends BaseRepository<DbType> {
  constructor() {
    super(db, 'Treatment');
  }

  public async getAllTreatments(): Promise<ITreatment[]> {
    try {
      const allTreatments = await this.getAll<ITreatment, Treatment>(treatmentCollection.transformCollection);
      return allTreatments;
    } catch (error) {
      throw error;
    }
  }

  public async getTreatment(treatmentId: string): Promise<ITreatment> {
    try {
      const treatment = await this.get<ITreatment, Treatment>(treatmentId, treatmentResource.transform)
      return treatment
    } catch (error) {
      throw error
    }
  }

  public async createTreatment(data: Partial<ITreatment>): Promise<ITreatment> {
    try {
      const newTreatment = await this.create<ITreatmentCreateDto, ITreatment>(
        {
          type: data.type,
          description: data.description,
        },
        treatmentResource.transform
      );
      return newTreatment;
    } catch (error) {
      throw error;
    }
  }

  public async deleteTreatment(treatmentId: string): Promise<ITreatment> {
    try {
      const deletedTreatment = await this.delete<ITreatment>(treatmentId, treatmentResource.transform);
      return deletedTreatment;
    } catch (error) {
      throw error;
    }
  }

  public async updateTreatment(treatmentId: string, payload: Partial<ITreatment>): Promise<ITreatment> {
    try {
      const { type, description } = payload;
      const updatedTreatment = await this.update<ITreatment, Treatment>(
        treatmentId,
        {
          ...(type ? { type } : {}),
          ...(description ? { description } : {}),
        },
        treatmentResource.transform
      );
      return updatedTreatment;
    } catch (error) {
      throw error;
    }
  }
}
