import { Router } from "express";
import LocationController from '../controllers/location.controller';

const locationRouter = Router();

// Get all locations
locationRouter.get("/locations/all", LocationController.getAllLocations);

// Get a location
locationRouter.get("/locations/:locationId", LocationController.getLocation);

//get location with pagination
locationRouter.get('/locations', LocationController.getLocations)

// Create a location
locationRouter.post("/location", LocationController.createLocation);

// Delete a location
locationRouter.delete("/locations/:locationId", LocationController.deleteLocation);

// Update a location
locationRouter.put("/locations/:locationId", LocationController.updateLocation);

export default locationRouter;
