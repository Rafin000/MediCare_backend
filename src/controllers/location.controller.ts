import { ILocation, ILocationCreateDto, ILocationUpdateDto, PaginateResponse, Request } from "../types";
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


  static getLocations = catchAsync(
    async (req: Request, res: Response) => {
      const locationService = new LocationService();
      const { page, limit, filters, includes } = req.query;
      const response: PaginateResponse<ILocation> = await locationService.getLocations({
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
      const payload = req.body as ILocationCreateDto;
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
      const payload = req.body as ILocationUpdateDto;
      const locationService = new LocationService();
      const updatedLocation: ILocation = await locationService.updateLocation(locationId, payload);
      apiResponse.sendSuccess({ res, data: updatedLocation });
    }
  );
}
