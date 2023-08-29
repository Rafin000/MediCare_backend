import { Router } from "express";
import userController from "../controllers/user.controller";

const userRouter = Router();

// get users list
// -> baseUrl/users
userRouter.get('/users', userController.getAllUsers)

// get a single user info
// -> baseUrl/users/:userId
userRouter.get('/users/:userId', userController.getUser)

// create a new user
// -> baseUrl/user
userRouter.post('/user', userController.createUser);

// update a user
// -> baseUrl/users/:userId
userRouter.put('/users/:userId', userController.updateUser);

// delete a user
// -> baseUrl/users/:userId
userRouter.delete('/users/:userId', userController.deleteUser);

// // add a role
// //-> baseUrl/users/:userId
// userRouter.post('/users/:userId',userController.addOrRemoveUserRoles)

//add or remove role
userRouter.post('/user/roles/:userId', userController.addOrRemoveUserRoles);

//get a user roles
userRouter.get("/user/roles/:userId?", userController.getUserAllRoles);

export default userRouter;