import { Router } from "express";
import RoleController from "../controllers/role.controller";

const roleRouter = Router()
//get all roles
roleRouter.get(
  "/roles",
  RoleController.getAllRoles
)

//get a role
roleRouter.get(
  "/roles/:roleId",
  RoleController.getRole
)

//create a role
roleRouter.post(
  "/role",
  RoleController.createRole
)

//delete a role
roleRouter.delete(
  "/roles/:roleId",
  RoleController.deleteRole
)

//update a role
roleRouter.patch(
  "/roles/:roleId",
  RoleController.updateRole
)

export default roleRouter