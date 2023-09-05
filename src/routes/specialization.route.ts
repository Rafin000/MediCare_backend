import { Router } from "express";
import SpecializationController from '../controllers/specialization.controller';

const specializationRouter = Router();

// Get all specializations
specializationRouter.get("/specializations", SpecializationController.getAllSpecializations);

// Get a specialization
specializationRouter.get("/specializations/:specializationId?", SpecializationController.getSpecialization);

// Create a specialization
specializationRouter.post("/specialization", SpecializationController.createSpecialization);

// Delete a specialization
specializationRouter.delete("/specializations/:specializationId?", SpecializationController.deleteSpecialization);

// Update a specialization
specializationRouter.put("/specializations/:specializationId?", SpecializationController.updateSpecialization);

export default specializationRouter;
