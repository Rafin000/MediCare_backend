import { Award } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import awardCollection from "../transformer/award.transformer/award.collection";
import awardResource from "../transformer/award.transformer/award.resource";
import { IAward, IAwardCreateDto, IAwardUpdateDto, PaginateResponse, PaginationQueryParams } from "../types";
import { buildIncludesObject, buildWhereObject } from "../utils/utils";

export default class AwardRepository extends BaseRepository<DbType> {
  constructor() {
    super(db, 'Award');
  }

  public async getAllAwards(): Promise<IAward[]> {
    try {
      const allAwards = await this.getAll<IAward, Award>(awardCollection.transformCollection);
      return allAwards;
    } catch (error) {
      throw error;
    }
  }

  public async getAwards({
    page,
    limit,
    filters,
    includes = '',
  }: PaginationQueryParams): Promise<PaginateResponse<IAward>> {
    try {
      const includeArray = includes.split(',');

      const response = await this.paginate({
        page,
        pageSize: limit,
        transformCollection: awardCollection.transformCollection,
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



  public async getAward(awardId: string): Promise<IAward> {
    try {
      const award = await this.get<IAward, Award>(awardId, awardResource.transform);
      return award;
    } catch (error) {
      throw error;
    }
  }
  

  public async createAward(data: IAwardCreateDto): Promise<IAward> {
    try {
      const newAward = await this.create<IAward, Award>(
        {
          name: data.name,
          description: data.description
        },
        awardResource.transform
      );
      return newAward;
    } catch (error) {
      throw error;
    }
  }

  public async deleteAward(awardId: string): Promise<IAward> {
    try {
      const deletedAward = await this.delete<IAward>(awardId, awardResource.transform);
      return deletedAward;
    } catch (error) {
      throw error;
    }
  }

  public async updateAward(awardId: string, payload: IAwardUpdateDto): Promise<IAward> {
    try {
      const { name, description } = payload;
      const updatedAward = await this.update<IAward, Award>(
        awardId,
        {
          ...(name ? { name } : {}),
          ...(description ? { description } : {}),
        },
        awardResource.transform
      );
      return updatedAward;
    } catch (error) {
      throw error;
    }
  }
}
