import { Router } from "express";
import AwardController from '../controllers/award.controller';

const awardRouter = Router();

// Get all awards
awardRouter.get("/awards/all", AwardController.getAllAwards);

// Get an award
awardRouter.get("/awards/:awardId", AwardController.getAward);

// Create an award
awardRouter.post("/award", AwardController.createAward);

// Delete an award
awardRouter.delete("/awards/:awardId", AwardController.deleteAward);

// Update an award
awardRouter.put("/awards/:awardId", AwardController.updateAward);

export default awardRouter;
