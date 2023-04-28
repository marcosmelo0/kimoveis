import { Router } from "express";
import { createSchedulesController } from "../controllers/schedules.controller";
import { ensureDataValid } from "../middlewares/users/ensureDataValid";
import { ensureTokenValid } from "../middlewares/users/ensureTokenValid";
import { shedulesSchema } from "../schemas/shedules.schema";

export const schedulesRoutes = Router()

schedulesRoutes.post("",ensureTokenValid, ensureDataValid(shedulesSchema), createSchedulesController)