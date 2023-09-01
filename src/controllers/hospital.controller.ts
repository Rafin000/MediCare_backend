import { IHospital, Request } from "../types";
import { Response } from "express";
import catchAsync from "../utils/catchAsync";
import HospitalService from "../services/hospital.service";
import apiResponse from "../services/apiResponse.service";

export default class HospitalController {

  static getAllHospitals = catchAsync(
    async (req: Request, res: Response) => {
      const hospitalService = new HospitalService
      const hospitals: IHospital[] = await hospitalService.getAllHospitals()
      apiResponse.sendSuccess({ res: res, data: hospitals })
    }
  )

  static createHospital = catchAsync(
    async (req: Request, res: Response) => {
      const payload = req.body as IHospital
      const hospitalService = new HospitalService
      const newHospital: IHospital = await hospitalService.createHospital(payload)
      apiResponse.sendSuccess({ res: res, data: newHospital })
    }
  )
}