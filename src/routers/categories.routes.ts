import { Router } from "express"
import { createCategoriesController, listCategoriesController, listCategoriesWithEstateController } from "../controllers/categories.controller"
import { ensureCategoryNameValid } from "../middlewares/categories/ensureCategoryNameValid"
import { ensureDataValid } from "../middlewares/users/ensureDataValid"
import { ensureIsAdmin } from "../middlewares/users/EnsureIsAdmin"
import { ensureTokenValid } from "../middlewares/users/ensureTokenValid"
import { categoriesSchema } from "../schemas/categories.schema"

export const categoriesRoutes = Router()

categoriesRoutes.post("", ensureTokenValid, ensureIsAdmin, ensureDataValid(categoriesSchema), ensureCategoryNameValid, createCategoriesController)
categoriesRoutes.get("", listCategoriesController)
categoriesRoutes.get("/:id/realEstate", listCategoriesWithEstateController)