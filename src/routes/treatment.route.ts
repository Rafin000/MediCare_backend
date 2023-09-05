import { Router } from "express";
import treatmentController from "../controllers/treatment.controller";

const treatmentRouter = Router();

// Get all treatments
treatmentRouter.get("/treatments", treatmentController.getAllTreatments);

//get a treatment
treatmentRouter.get("/treatments/:treatmentId?", treatmentController.getTreatment);

// Create a treatment
treatmentRouter.post("/treatment", treatmentController.createTreatment);

// Delete a treatment
treatmentRouter.delete("/treatments/:treatmentId?", treatmentController.deleteTreatment);

// Update a treatment
treatmentRouter.put("/treatments/:treatmentId?", treatmentController.updateTreatment);

export default treatmentRouter;
