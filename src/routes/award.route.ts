import { Router } from "express";
import awardController from '../controllers/award.controller';

const awardRouter = Router();

// Get all awards
awardRouter.get("/awards", awardController.getAllAwards);

// Get an award
awardRouter.get("/award/:awardId?", awardController.getAward);

// Create an award
awardRouter.post("/award", awardController.createAward);

// Delete an award
awardRouter.delete("/award/:awardId?", awardController.deleteAward);

// Update an award
awardRouter.put("/award/:awardId?", awardController.updateAward);

export default awardRouter;
