import { Router } from "express";
import TreatmentController from "../controllers/treatment.controller";

const treatmentRouter = Router();

// Get all treatments
treatmentRouter.get("/treatments/all", TreatmentController.getAllTreatments);

//get hospitals with pagination
treatmentRouter.get('/treatments', TreatmentController.getTreatments)

//get a treatment
treatmentRouter.get("/treatments/:treatmentId", TreatmentController.getTreatment);

// Create a treatment
treatmentRouter.post("/treatment", TreatmentController.createTreatment);

// Delete a treatment
treatmentRouter.delete("/treatments/:treatmentId", TreatmentController.deleteTreatment);

// Update a treatment
treatmentRouter.put("/treatments/:treatmentId", TreatmentController.updateTreatment);

export default treatmentRouter;
