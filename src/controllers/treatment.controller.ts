import { ITreatment, ITreatmentCreateDto, ITreatmentUpdateDto, PaginateResponse, Request } from "../types";
import { Response } from "express";
import catchAsync from "../utils/catchAsync";
import TreatmentService from "../services/treatment.service";
import apiResponse from "../services/apiResponse.service";

export default class TreatmentController {

  static getAllTreatments = catchAsync(
    async (req: Request, res: Response) => {
      const treatmentService = new TreatmentService();
      const treatments: ITreatment[] = await treatmentService.getAllTreatments();
      apiResponse.sendSuccess({ res: res, data: treatments });
    }
  );


  static getTreatments = catchAsync(
    async (req: Request, res: Response) => {
      const treatmentService = new TreatmentService();
      const { page, limit, filters, includes } = req.query;
      const response: PaginateResponse<ITreatment> = await treatmentService.getTreatments({
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
  

  static getTreatment = catchAsync(
    async (req: Request, res: Response) => {
      const treatmentService = new TreatmentService();
      const { treatmentId } = req.params;
      const treatment: ITreatment = await treatmentService.getTreatment(treatmentId);
      apiResponse.sendSuccess({ res: res, data: treatment })
    }
  )

  static createTreatment = catchAsync(
    async (req: Request, res: Response) => {
      const payload = req.body as ITreatmentCreateDto;
      const treatmentService = new TreatmentService();
      const newTreatment: ITreatment = await treatmentService.createTreatment(payload);
      apiResponse.sendSuccess({ res: res, data: newTreatment });
    }
  );

  static deleteTreatment = catchAsync(
    async (req: Request, res: Response) => {
      const treatmentId = req.params.treatmentId;
      const treatmentService = new TreatmentService();
      const deletedTreatment: ITreatment = await treatmentService.deleteTreatment(treatmentId);
      apiResponse.sendSuccess({ res, data: deletedTreatment });
    }
  );

  static updateTreatment = catchAsync(
    async (req: Request, res: Response) => {
      const treatmentId = req.params.treatmentId;
      const payload = req.body as ITreatmentUpdateDto;
      const treatmentService = new TreatmentService();
      const updatedTreatment: ITreatment = await treatmentService.updateTreatment(treatmentId, payload);
      apiResponse.sendSuccess({ res, data: updatedTreatment });
    }
  );
}
