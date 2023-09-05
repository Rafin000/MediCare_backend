import { Router } from "express";
import doctorController from '../controllers/doctor.controller';

const doctorRouter = Router();

// Get all doctors
doctorRouter.get("/doctors", doctorController.getAllDoctors);

// Get a doctor
doctorRouter.get("/doctor/:doctorId?", doctorController.getDoctor);

// Create a doctor
doctorRouter.post("/doctor", doctorController.createDoctor);

// Delete a doctor
doctorRouter.delete("/doctors/:doctorId?", doctorController.deleteDoctor);

// Update a doctor
doctorRouter.put("/doctor/:doctorId?", doctorController.updateDoctor);

//get a doctor_info
doctorRouter.get("/doctors/infos/:doctorId?", doctorController.getDoctorInfos);

export default doctorRouter;
