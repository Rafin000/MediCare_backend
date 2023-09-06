import { ISpecialization, Request } from "../types";
import { Response } from "express";
import catchAsync from "../utils/catchAsync";
import SpecializationService from "../services/specialization.service";
import apiResponse from "../services/apiResponse.service";

export default class SpecializationController {

  static getAllSpecializations = catchAsync(
    async (req: Request, res: Response) => {
      const specializationService = new SpecializationService();
      const specializations: ISpecialization[] = await specializationService.getAllSpecializations();
      apiResponse.sendSuccess({ res: res, data: specializations });
    }
  );

  static getSpecialization = catchAsync(
    async (req: Request, res: Response) => {
      const specializationService = new SpecializationService();
      const { specializationId } = req.params;
      const specialization: ISpecialization = await specializationService.getSpecialization(specializationId);
      apiResponse.sendSuccess({ res: res, data: specialization });
    }
  );

  static createSpecialization = catchAsync(
    async (req: Request, res: Response) => {
      const payload = req.body as ISpecialization;
      const specializationService = new SpecializationService();
      const newSpecialization: ISpecialization = await specializationService.createSpecialization(payload);
      apiResponse.sendSuccess({ res: res, data: newSpecialization });
    }
  );

  static deleteSpecialization = catchAsync(
    async (req: Request, res: Response) => {
      const specializationId = req.params.specializationId;
      const specializationService = new SpecializationService();
      const deletedSpecialization: ISpecialization = await specializationService.deleteSpecialization(specializationId);
      apiResponse.sendSuccess({ res, data: deletedSpecialization });
    }
  );

  static updateSpecialization = catchAsync(
    async (req: Request, res: Response) => {
      const specializationId = req.params.specializationId;
      const payload = req.body as Partial<ISpecialization>;
      const specializationService = new SpecializationService();
      const updatedSpecialization: ISpecialization = await specializationService.updateSpecialization(specializationId, payload);
      apiResponse.sendSuccess({ res, data: updatedSpecialization });
    }
  );
}
