import { Router } from "express";
import DepartmentController from '../controllers/departmnet.controller';

const departmentRouter = Router();

// Get all departments
departmentRouter.get("/departments/all", DepartmentController.getAllDepartments);

// Get a department
departmentRouter.get("/departments/:departmentId", DepartmentController.getDepartment);

// Create a department
departmentRouter.post("/department", DepartmentController.createDepartment);

// Delete a department
departmentRouter.delete("/departments/:departmentId", DepartmentController.deleteDepartment);

// Update a department
departmentRouter.put("/departments/:departmentId", DepartmentController.updateDepartment);

export default departmentRouter;
