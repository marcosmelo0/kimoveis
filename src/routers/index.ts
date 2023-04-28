import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { loginRoutes } from "./login.routes";
import { realEstateRoutes } from "./realEstate.routes";
import { schedulesRoutes } from "./schedules.routes";
import { userRoutes } from "./users.routes";

export const router = Router()

router.use("/users", userRoutes)
router.use("/login", loginRoutes)
router.use("/categories", categoriesRoutes)
router.use("/realEstate", realEstateRoutes)
router.use("/schedules", schedulesRoutes)