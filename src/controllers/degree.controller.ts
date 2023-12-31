import { IDegree, IDegreeCreateDto, IDegreeUpdateDto, PaginateResponse, Request } from "../types";
import { Response } from "express";
import catchAsync from "../utils/catchAsync";
import DegreeService from "../services/degree.service";
import apiResponse from "../services/apiResponse.service";

export default class DegreeController {

  static getAllDegrees = catchAsync(
    async (req: Request, res: Response) => {
      const degreeService = new DegreeService();
      const degrees: IDegree[] = await degreeService.getAllDegrees();
      apiResponse.sendSuccess({ res: res, data: degrees });
    }
  );


  static getDegrees = catchAsync(
    async (req: Request, res: Response) => {
      const degreeService = new DegreeService();
      const { page, limit, filters, includes } = req.query;
      const response: PaginateResponse<IDegree> = await degreeService.getDegrees({
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
  

  static getDegree = catchAsync(
    async (req: Request, res: Response) => {
      const degreeService = new DegreeService();
      const { degreeId } = req.params;
      const degree: IDegree = await degreeService.getDegree(degreeId);
      apiResponse.sendSuccess({ res: res, data: degree });
    }
  );

  static createDegree = catchAsync(
    async (req: Request, res: Response) => {
      const payload = req.body as IDegreeCreateDto;
      const degreeService = new DegreeService();
      const newDegree: IDegree = await degreeService.createDegree(payload);
      apiResponse.sendSuccess({ res: res, data: newDegree });
    }
  );

  static deleteDegree = catchAsync(
    async (req: Request, res: Response) => {
      const degreeId = req.params.degreeId;
      const degreeService = new DegreeService();
      const deletedDegree: IDegree = await degreeService.deleteDegree(degreeId);
      apiResponse.sendSuccess({ res, data: deletedDegree });
    }
  );

  static updateDegree = catchAsync(
    async (req: Request, res: Response) => {
      const degreeId = req.params.degreeId;
      const payload = req.body as IDegreeUpdateDto;
      const degreeService = new DegreeService();
      const updatedDegree: IDegree = await degreeService.updateDegree(degreeId, payload);
      apiResponse.sendSuccess({ res, data: updatedDegree });
    }
  );
}
