import { IHospital, Request } from "../types";
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
      const payload = req.body as IHospital
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
      const payload = req.body as Partial<IHospital>;
      const hospitalService = new HospitalService();
      const updatedHospital: IHospital = await hospitalService.updateHospital(hospitalId, payload);
      apiResponse.sendSuccess({ res, data: updatedHospital })
    }
  )
}