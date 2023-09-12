import { Treatment } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import treatmentCollection from "../transformer/treatment.transformer/treatment.collection";
import treatmentResource from "../transformer/treatment.transformer/treatment.resource";
import { ITreatment, ITreatmentCreateDto, ITreatmentUpdateDto, PaginateResponse, PaginationQueryParams } from "../types";
import { buildIncludesObject, buildWhereObject } from "../utils/utils";

export default class TreatmentRepository extends BaseRepository<DbType> {
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


  public async getTreatments({
    page,
    limit,
    filters,
    includes = '',
  }: PaginationQueryParams): Promise<PaginateResponse<ITreatment>> {
    try {
      const includeArray = includes.split(',');

      const response = await this.paginate({
        page,
        pageSize: limit,
        transformCollection: treatmentCollection.transformCollection,
        options: {
          includes: buildIncludesObject(includeArray ?? []),
          where: buildWhereObject(filters),
        },
      });
      return response;
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

  public async createTreatment(data: ITreatmentCreateDto): Promise<ITreatment> {
    try {
      const newTreatment = await this.create<ITreatment, Treatment>(
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

  public async updateTreatment(treatmentId: string, payload: ITreatmentUpdateDto): Promise<ITreatment> {
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
