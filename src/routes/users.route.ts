import { Router } from "express";
import UserController from "../controllers/user.controller";
import UserMiddleware from "../middlewares/userMiddleware";

const userRouter = Router();

// get users list
// -> baseUrl/users
userRouter.get('/users/all', UserController.getAllUsers)

//get users with pagination
userRouter.get('/users',UserController.getUsers)

// get a single user info
// -> baseUrl/users/:userId
userRouter.get('/users/:userId', UserController.getUser)

// create a new user
// -> baseUrl/user
userRouter.post('/user', UserController.createUser);

// update a user
// -> baseUrl/users/:userId
userRouter.put('/users/:userId', UserController.updateUser);

// delete a user
// -> baseUrl/users/:userId
userRouter.delete('/users/:userId', UserController.deleteUser);

//add or remove role
userRouter.post('/user/roles/:userId', UserController.addOrRemoveUserRoles);

//get a user roles
userRouter.get("/user/roles/:userId?", UserController.getUserAllRoles);

export default userRouter;