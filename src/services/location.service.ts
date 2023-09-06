import { Location } from "@prisma/client";
import { DbType, db } from "../db.server";
import BaseRepository from "../repository/base.repository";
import locationCollection from "../transformer/location.transformer/location.collection";
import locationResource from "../transformer/location.transformer/location.resource";
import { ILocation, ILocationCreateDto } from "../types";

export default class LocationService extends BaseRepository<DbType> {
  constructor() {
    super(db, 'Location');
  }

  public async getAllLocations(): Promise<ILocation[]> {
    try {
      const allLocations = await this.getAll<ILocation, Location>(locationCollection.transformCollection);
      return allLocations;
    } catch (error) {
      throw error;
    }
  }

  public async getLocation(locationId: string): Promise<ILocation> {
    try {
      const location = await this.get<ILocation, Location>(locationId, locationResource.transform);
      return location;
    } catch (error) {
      throw error;
    }
  }

  public async createLocation(data: Partial<ILocation>): Promise<ILocation> {
    try {
      const newLocation = await this.create<ILocationCreateDto, ILocation>(
        {
          latitude: data.latitude,
          longitude: data.longitude,
          address: data.address,
          street: data.street,
          district: data.district,
          division: data.division,
          thana: data.thana,
          country: data.country
        },
        locationResource.transform
      );
      return newLocation;
    } catch (error) {
      throw error;
    }
  }

  public async deleteLocation(locationId: string): Promise<ILocation> {
    try {
      const deletedLocation = await this.delete<ILocation>(locationId, locationResource.transform);
      return deletedLocation;
    } catch (error) {
      throw error;
    }
  }

  public async updateLocation(locationId: string, payload: Partial<ILocation>): Promise<ILocation> {
    try {
      const { latitude, longitude, country, address, thana, district, division, street } = payload;
      const updatedLocation = await this.update<ILocation, Location>(
        locationId,
        {
          ...(latitude ? { latitude } : {}),
          ...(longitude ? { longitude } : {}),
          ...(country ? { country } : {}),
          ...(address ? { address } : {}),
          ...(thana ? { thana } : {}),
          ...(district ? { district } : {}),
          ...(division ? { division } : {}),
          ...(street ? { street } : {}),
        },
        locationResource.transform
      );
      return updatedLocation;
    } catch (error) {
      throw error;
    }
  }
}
