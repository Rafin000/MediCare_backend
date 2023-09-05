import { Award } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import awardCollection from "../transformer/award.transformer/award.collection";
import awardResource from "../transformer/award.transformer/award.resource";
import { IAward } from "../types";

export default class AwardService extends BaseRepository<DbType> {
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

  public async getAward(awardId: string): Promise<IAward> {
    try {
      const award = await this.get<IAward, Award>(awardId, awardResource.transform);
      return award;
    } catch (error) {
      throw error;
    }
  }

  public async createAward(data: Partial<IAward>): Promise<IAward> {
    try {
      const newAward = await this.create<Omit<Award, 'id'>, IAward>(
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

  public async updateAward(awardId: string, payload: Partial<IAward>): Promise<IAward> {
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
