import { IDegree, Request } from "../types";
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
      const payload = req.body as IDegree;
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
      const payload = req.body as Partial<IDegree>;
      const degreeService = new DegreeService();
      const updatedDegree: IDegree = await degreeService.updateDegree(degreeId, payload);
      apiResponse.sendSuccess({ res, data: updatedDegree });
    }
  );
}
