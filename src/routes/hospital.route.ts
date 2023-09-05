import { Router } from "express";
import hospitalController from "../controllers/hospital.controller";

const hospitalRouter = Router();


//get all hospital
hospitalRouter.get("/hospitals", hospitalController.getAllHospitals);

//get a hospital
hospitalRouter.get("/hospitals/:hospitalId?", hospitalController.getHospital);

//create a hospital
hospitalRouter.post("/hospital", hospitalController.createHospital);

//delete a hospital
hospitalRouter.delete("/hospitals/:hospitalId?", hospitalController.deleteHospital);

//update a hospital
hospitalRouter.put("/hospitals/:hospitalId?", hospitalController.updateHospital);

export default hospitalRouter;