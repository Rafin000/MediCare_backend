import { Router } from "express";
import DegreeController from '../controllers/degree.controller';

const degreeRouter = Router();

// Get all degrees
degreeRouter.get("/degrees/all", DegreeController.getAllDegrees);

// Get a degree
degreeRouter.get("/degrees/:degreeId", DegreeController.getDegree);

// Create a degree
degreeRouter.post("/degree", DegreeController.createDegree);

// Delete a degree
degreeRouter.delete("/degrees/:degreeId", DegreeController.deleteDegree);

// Update a degree
degreeRouter.put("/degrees/:degreeId", DegreeController.updateDegree);

export default degreeRouter;
