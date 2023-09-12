import { IAward, IAwardCreateDto, IAwardUpdateDto, PaginateResponse, PaginationQueryParams } from "../types";
import AwardRepository from "../repository/award.repository";

export default class AwardService {
  protected readonly awardRepository: AwardRepository;
  constructor() {
    this.awardRepository = new AwardRepository();
  }

  public async getAllAwards(): Promise<IAward[]> {
    try {
      const allAwards = await this.awardRepository.getAllAwards();
      return allAwards;
    } catch (error) {
      throw error;
    }
  }

  public async getAwards({
    params,
  }: {
    params: PaginationQueryParams;
  }): Promise<PaginateResponse<IAward>> {
    const response = await this.awardRepository.getAwards({ ...params });
    return response;
  }

  public async getAward(awardId: string): Promise<IAward> {
    try {
      const award = await this.awardRepository.getAward(awardId);
      return award;
    } catch (error) {
      throw error;
    }
  }

  public async createAward(data: IAwardCreateDto): Promise<IAward> {
    try {
      const newAward = await this.awardRepository.createAward(data);
      return newAward;
    } catch (error) {
      throw error;
    }
  }

  public async deleteAward(awardId: string): Promise<IAward> {
    try {
      const deletedAward = await this.awardRepository.deleteAward(awardId);
      return deletedAward;
    } catch (error) {
      throw error;
    }
  }

  public async updateAward(awardId: string, payload: IAwardUpdateDto): Promise<IAward> {
    try {
      const updatedAward = await this.awardRepository.updateAward(awardId, payload);
      return updatedAward;
    } catch (error) {
      throw error;
    }
  }
}
