import { IHospital, IHospitalCreateDto, IHospitalUpdateDto, PaginateResponse, Request } from "../types";
import { Response } from "express";
import catchAsync from "../utils/catchAsync";
import HospitalService from "../services/hospital.service";
import apiResponse from "../services/apiResponse.service";

export default class HospitalController {

  static getAllHospitals = catchAsync(
    async (req: Request, res: Response) => {
      const hospitalService = new HospitalService()
      const hospitals: IHospital[] = await hospitalService.getAllHospitals()
      apiResponse.sendSuccess({ res: res, data: hospitals })
    }
  )


  static getHospitals = catchAsync(
    async (req: Request, res: Response) => {
      const hospitalService = new HospitalService();
      const { page, limit, filters, includes } = req.query;
      const response: PaginateResponse<IHospital> = await hospitalService.getHospitals({
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

  static getHospital = catchAsync(
    async (req: Request, res: Response) => {
      const hospitalService = new HospitalService();
      const { hospitalId } = req.params;
      const hospital: IHospital = await hospitalService.getHospital(hospitalId);
      apiResponse.sendSuccess({ res: res, data: hospital })
    }
  )

  static createHospital = catchAsync(
    async (req: Request, res: Response) => {
      const payload = req.body as IHospitalCreateDto
      const hospitalService = new HospitalService()
      const newHospital: IHospital = await hospitalService.createHospital(payload)
      apiResponse.sendSuccess({ res: res, data: newHospital })
    }
  )

  static deleteHospital = catchAsync(
    async (req: Request, res: Response) => {
      const hospitalId = req.params.hospitalId;
      const hospitalService = new HospitalService();
      const deletedHospital: IHospital = await hospitalService.deleteHospital(hospitalId);
      apiResponse.sendSuccess({ res, data: deletedHospital })
    }
  )

  static updateHospital = catchAsync(
    async (req: Request, res: Response) => {
      const hospitalId = req.params.hospitalId;
      const payload = req.body as IHospitalUpdateDto;
      const hospitalService = new HospitalService();
      const updatedHospital: IHospital = await hospitalService.updateHospital(hospitalId, payload);
      apiResponse.sendSuccess({ res, data: updatedHospital })
    }
  )
}