import { Router } from "express";
import departmentController from '../controllers/departmnet.controller';

const departmentRouter = Router();

// Get all departments
departmentRouter.get("/departments", departmentController.getAllDepartments);

// Get a department
departmentRouter.get("/department/:departmentId?", departmentController.getDepartment);

// Create a department
departmentRouter.post("/department", departmentController.createDepartment);

// Delete a department
departmentRouter.delete("/departments/:departmentId?", departmentController.deleteDepartment);

// Update a department
departmentRouter.put("/department/:departmentId?", departmentController.updateDepartment);

export default departmentRouter;
