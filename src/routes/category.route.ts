import { Router } from "express";
import CategoryController from '../controllers/category.controller';

const categoryRouter = Router();

// Get all categories
categoryRouter.get("/categories/all", CategoryController.getAllCategories);

//get Categories with pagination
categoryRouter.get('/categories', CategoryController.getCategories)

// Get a category
categoryRouter.get("/categories/:categoryId", CategoryController.getCategory);

// Create a category
categoryRouter.post("/category", CategoryController.createCategory);

// Delete a category
categoryRouter.delete("/categories/:categoryId", CategoryController.deleteCategory);

// Update a category
categoryRouter.put("/categories/:categoryId", CategoryController.updateCategory);

export default categoryRouter;
