import { Router } from "express";
import hospitalController from "../controllers/hospital.controller";

const hospitalRouter = Router();


//get a hospital
hospitalRouter.get("/hospitals", hospitalController.getAllHospitals);

//create a hospital

hospitalRouter.post("/hospital", hospitalController.createHospital);

//delete a hospital

//update a hospital

export default hospitalRouter;