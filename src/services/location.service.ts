import { ILocation, ILocationCreateDto, ILocationUpdateDto } from "../types";
import LocationRepository from "../repository/location.repository";

export default class LocationService {
  protected readonly locationRepository: LocationRepository;

  constructor() {
    this.locationRepository = new LocationRepository();
  }

  public async getAllLocations(): Promise<ILocation[]> {
    try {
      const allLocations = await this.locationRepository.getAllLocations();
      return allLocations;
    } catch (error) {
      throw error;
    }
  }

  public async getLocation(locationId: string): Promise<ILocation> {
    try {
      const location = await this.locationRepository.getLocation(locationId)
      return location;
    } catch (error) {
      throw error;
    }
  }

  public async createLocation(data: ILocationCreateDto): Promise<ILocation> {
    try {
      const newLocation = await this.locationRepository.createLocation(data)
      return newLocation;
    } catch (error) {
      throw error;
    }
  }

  public async deleteLocation(locationId: string): Promise<ILocation> {
    try {
      const deletedLocation = await this.locationRepository.deleteLocation(locationId)
      return deletedLocation;
    } catch (error) {
      throw error;
    }
  }

  public async updateLocation(locationId: string, payload: ILocationUpdateDto): Promise<ILocation> {
    try {
      const updatedLocation = await this.locationRepository.updateLocation(locationId, payload)
      return updatedLocation;
    } catch (error) {
      throw error;
    }
  }
}
