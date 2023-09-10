import { ILocation, Request } from "../types";
import { Response } from "express";
import catchAsync from "../utils/catchAsync";
import LocationService from "../services/location.service";
import apiResponse from "../services/apiResponse.service";

export default class LocationController {

  static getAllLocations = catchAsync(
    async (req: Request, res: Response) => {
      const locationService = new LocationService();
      const locations: ILocation[] = await locationService.getAllLocations();
      apiResponse.sendSuccess({ res: res, data: locations });
    }
  );

  static getLocation = catchAsync(
    async (req: Request, res: Response) => {
      const locationService = new LocationService();
      const { locationId } = req.params;
      const location: ILocation = await locationService.getLocation(locationId);
      apiResponse.sendSuccess({ res: res, data: location });
    }
  );

  static createLocation = catchAsync(
    async (req: Request, res: Response) => {
      const payload = req.body as ILocation;
      const locationService = new LocationService();
      const newLocation: ILocation = await locationService.createLocation(payload);
      apiResponse.sendSuccess({ res: res, data: newLocation });
    }
  );

  static deleteLocation = catchAsync(
    async (req: Request, res: Response) => {
      const locationId = req.params.locationId;
      const locationService = new LocationService();
      const deletedLocation: ILocation = await locationService.deleteLocation(locationId);
      apiResponse.sendSuccess({ res, data: deletedLocation });
    }
  );

  static updateLocation = catchAsync(
    async (req: Request, res: Response) => {
      const locationId = req.params.locationId;
      const payload = req.body as Partial<ILocation>;
      const locationService = new LocationService();
      const updatedLocation: ILocation = await locationService.updateLocation(locationId, payload);
      apiResponse.sendSuccess({ res, data: updatedLocation });
    }
  );
}
