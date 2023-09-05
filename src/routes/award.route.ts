import { Router } from "express";
import awardController from '../controllers/award.controller';

const awardRouter = Router();

// Get all awards
awardRouter.get("/awards", awardController.getAllAwards);

// Get an award
awardRouter.get("/awards/:awardId?", awardController.getAward);

// Create an award
awardRouter.post("/award", awardController.createAward);

// Delete an award
awardRouter.delete("/awards/:awardId?", awardController.deleteAward);

// Update an award
awardRouter.put("/awards/:awardId?", awardController.updateAward);

export default awardRouter;
