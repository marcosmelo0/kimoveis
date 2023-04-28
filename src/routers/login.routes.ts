import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { ensureDataValid } from "../middlewares/users/ensureDataValid";
import { loginSchema } from "../schemas/login.schema";

export const loginRoutes = Router()

loginRoutes.post("",ensureDataValid(loginSchema), loginController)