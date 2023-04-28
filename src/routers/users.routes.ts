import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updatedUserController } from "../controllers/user.controller";
import { ensureDataValid } from "../middlewares/users/ensureDataValid";
import { ensureEmailValid } from "../middlewares/users/ensureEmailValid";
import { ensureIsAdmin } from "../middlewares/users/EnsureIsAdmin";
import { ensureOwnerUser } from "../middlewares/users/ensureOwnerUser";
import { ensureTokenValid } from "../middlewares/users/ensureTokenValid";
import { ensureUserExist } from "../middlewares/users/ensureUserExists";
import { userSchema, userUpdateSchema } from "../schemas/user.schema";

export const userRoutes = Router()

userRoutes.post("", ensureDataValid(userSchema), ensureEmailValid, createUserController)
userRoutes.get("", ensureTokenValid, ensureIsAdmin, listUsersController)
userRoutes.patch("/:id", ensureTokenValid,ensureUserExist, ensureOwnerUser, ensureDataValid(userUpdateSchema), updatedUserController)
userRoutes.delete("/:id", ensureTokenValid,ensureUserExist,ensureOwnerUser, ensureIsAdmin, deleteUserController)