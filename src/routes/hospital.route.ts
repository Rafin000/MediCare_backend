import { Router } from "express";
import HospitalController from "../controllers/hospital.controller";

const hospitalRouter = Router();


//get all hospital
hospitalRouter.get("/hospitals/all", HospitalController.getAllHospitals);

//get a hospital
hospitalRouter.get("/hospitals/:hospitalId", HospitalController.getHospital);

//create a hospital
hospitalRouter.post("/hospital", HospitalController.createHospital);

//delete a hospital
hospitalRouter.delete("/hospitals/:hospitalId", HospitalController.deleteHospital);

//update a hospital
hospitalRouter.put("/hospitals/:hospitalId", HospitalController.updateHospital);

export default hospitalRouter;