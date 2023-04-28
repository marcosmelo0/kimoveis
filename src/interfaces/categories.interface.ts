import { z } from "zod";
import { categoriesSchema, returnCategoriesSchema, returnListCategories } from "../schemas/categories.schema";

export type ICategories = z.infer<typeof categoriesSchema>
export type IReturnCategories = z.infer<typeof returnCategoriesSchema>
export type IReturnListCategories = z.infer<typeof returnListCategories>
