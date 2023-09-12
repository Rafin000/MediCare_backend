import { IAward, IAwardCreateDto, IAwardUpdateDto, PaginateResponse, Request } from "../types";
import { Response } from "express";
import catchAsync from "../utils/catchAsync";
import AwardService from "../services/award.service";
import apiResponse from "../services/apiResponse.service";

export default class AwardController {

  static getAllAwards = catchAsync(
    async (req: Request, res: Response) => {
      const awardService = new AwardService();
      const awards: IAward[] = await awardService.getAllAwards();
      apiResponse.sendSuccess({ res: res, data: awards });
    }
  );


  static getAwards = catchAsync(
    async (req: Request, res: Response) => {
      const awardService = new AwardService();
      const { page, limit, filters, includes } = req.query;
      const response: PaginateResponse<IAward> = await awardService.getAwards({
        params: {
          page: Number(page ?? 1),
          limit: Number(limit ?? 20),
          filters: filters as Record<string, any>,
          includes: includes as string
        },
      });
      apiResponse.sendSuccess({ res: res, data: response.data, meta: response.meta })
    }
  )


  static getAward = catchAsync(
    async (req: Request, res: Response) => {
      const awardService = new AwardService();
      const { awardId } = req.params;
      const award: IAward = await awardService.getAward(awardId);
      apiResponse.sendSuccess({ res: res, data: award });
    }
  );

  static createAward = catchAsync(
    async (req: Request, res: Response) => {
      const payload = req.body as IAwardCreateDto;
      const awardService = new AwardService();
      const newAward: IAward = await awardService.createAward(payload);
      apiResponse.sendSuccess({ res: res, data: newAward });
    }
  );

  static deleteAward = catchAsync(
    async (req: Request, res: Response) => {
      const awardId = req.params.awardId;
      const awardService = new AwardService();
      const deletedAward: IAward = await awardService.deleteAward(awardId);
      apiResponse.sendSuccess({ res, data: deletedAward });
    }
  );

  static updateAward = catchAsync(
    async (req: Request, res: Response) => {
      const awardId = req.params.awardId;
      const payload = req.body as IAwardUpdateDto;
      const awardService = new AwardService();
      const updatedAward: IAward = await awardService.updateAward(awardId, payload);
      apiResponse.sendSuccess({ res, data: updatedAward });
    }
  );
}
