import { Router } from "express";
import DoctorController from '../controllers/doctor.controller';

const doctorRouter = Router();

// Get all doctors
doctorRouter.get("/doctors/all", DoctorController.getAllDoctors);

// Get a doctor
doctorRouter.get("/doctors/:doctorId", DoctorController.getDoctor);

// Create a doctor

//1. first create user then create a doctor from another source
//2. directly create a doctor ..for that you have to create a user first then assign the user_id to the doctor
doctorRouter.post("/doctor/:userId", DoctorController.createDoctor);



// Delete a doctor
doctorRouter.delete("/doctors/:doctorId", DoctorController.deleteDoctor);

// Update a doctor
doctorRouter.put("/doctors/:doctorId", DoctorController.updateDoctor);

//get a doctor_info
doctorRouter.get("/doctors/info/:doctorId", DoctorController.getDoctorInfos);

export default doctorRouter;
