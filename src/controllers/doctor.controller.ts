import { IDoctor, Request } from "../types";
import { Response } from "express";
import catchAsync from "../utils/catchAsync";
import DoctorService from "../services/doctor.service";
import apiResponse from "../services/apiResponse.service";

export default class DoctorController {

  static getAllDoctors = catchAsync(
    async (req: Request, res: Response) => {
      const doctorService = new DoctorService();
      const doctors: IDoctor[] = await doctorService.getAllDoctors();
      apiResponse.sendSuccess({ res: res, data: doctors });
    }
  );

  static getDoctor = catchAsync(
    async (req: Request, res: Response) => {
      const doctorService = new DoctorService();
      const { doctorId } = req.params;
      const doctor: IDoctor = await doctorService.getDoctor(doctorId);
      apiResponse.sendSuccess({ res: res, data: doctor });
    }
  );

  static createDoctor = catchAsync(
    async (req: Request, res: Response) => {
      const payload = req.body as IDoctor;
      const doctorService = new DoctorService();
      const newDoctor: IDoctor = await doctorService.createDoctor(payload);
      apiResponse.sendSuccess({ res: res, data: newDoctor });
    }
  );

  static deleteDoctor = catchAsync(
    async (req: Request, res: Response) => {
      const doctorId = req.params.doctorId;
      const doctorService = new DoctorService();
      const deletedDoctor: IDoctor = await doctorService.deleteDoctor(doctorId);
      apiResponse.sendSuccess({ res, data: deletedDoctor });
    }
  );

  static updateDoctor = catchAsync(
    async (req: Request, res: Response) => {
      const doctorId = req.params.doctorId;
      const payload = req.body as Partial<IDoctor>;
      const doctorService = new DoctorService();
      const updatedDoctor: IDoctor = await doctorService.updateDoctor(doctorId, payload);
      apiResponse.sendSuccess({ res, data: updatedDoctor });
    }
  );
}
