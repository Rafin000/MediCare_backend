import { Router } from "express";
import specializationController from '../controllers/specialization.controller';

const specializationRouter = Router();

// Get all specializations
specializationRouter.get("/specializations", specializationController.getAllSpecializations);

// Get a specialization
specializationRouter.get("/specialization/:specializationId?", specializationController.getSpecialization);

// Create a specialization
specializationRouter.post("/specialization", specializationController.createSpecialization);

// Delete a specialization
specializationRouter.delete("/specializations/:specializationId?", specializationController.deleteSpecialization);

// Update a specialization
specializationRouter.put("/specialization/:specializationId?", specializationController.updateSpecialization);

export default specializationRouter;
