import { Router } from "express";
import degreeController from '../controllers/degree.controller';

const degreeRouter = Router();

// Get all degrees
degreeRouter.get("/degrees", degreeController.getAllDegrees);

// Get a degree
degreeRouter.get("/degrees/:degreeId?", degreeController.getDegree);

// Create a degree
degreeRouter.post("/degree", degreeController.createDegree);

// Delete a degree
degreeRouter.delete("/degrees/:degreeId?", degreeController.deleteDegree);

// Update a degree
degreeRouter.put("/degrees/:degreeId?", degreeController.updateDegree);

export default degreeRouter;
