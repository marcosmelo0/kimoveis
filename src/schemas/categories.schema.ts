import { z } from "zod";

export const categoriesSchema = z.object({
    name: z.string()
})

export const returnCategoriesSchema = categoriesSchema.extend({
    id: z.number()
})

export const returnListCategories = returnCategoriesSchema.array()