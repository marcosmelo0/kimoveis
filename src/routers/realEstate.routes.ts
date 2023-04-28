import { Router } from "express";
import { createRealEstateController, listRealEstatesController } from "../controllers/realEstate.controller";
import { ensureRealEstateAddValid } from "../middlewares/realEstate/ensureNameValid";
import { ensureDataValid } from "../middlewares/users/ensureDataValid";
import { ensureIsAdmin } from "../middlewares/users/EnsureIsAdmin";
import { ensureTokenValid } from "../middlewares/users/ensureTokenValid";
import { realEstateSchema } from "../schemas/realEstate.schema";

export const realEstateRoutes = Router()

realEstateRoutes.post("", ensureTokenValid, ensureIsAdmin, ensureDataValid(realEstateSchema), createRealEstateController)
realEstateRoutes.get("", listRealEstatesController)