import { Router } from "express";
import DoctorController from '../controllers/doctor.controller';

const doctorRouter = Router();

// Get all doctors
doctorRouter.get("/doctors", DoctorController.getAllDoctors);

// Get a doctor
doctorRouter.get("/doctors/:doctorId?", DoctorController.getDoctor);

// Create a doctor
doctorRouter.post("/doctor", DoctorController.createDoctor);

// Delete a doctor
doctorRouter.delete("/doctors/:doctorId?", DoctorController.deleteDoctor);

// Update a doctor
doctorRouter.put("/doctors/:doctorId?", DoctorController.updateDoctor);

//get a doctor_info
doctorRouter.get("/doctors/info/:doctorId?", DoctorController.getDoctorInfos);

export default doctorRouter;
