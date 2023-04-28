import { z } from "zod";
import { returnAdressSchema } from "./address.schema";
import { returnCategoriesSchema } from "./categories.schema";

export const realEstateSchema = z.object({
    value: z.string().or(z.number()),
    size: z.number().int().positive(),
    address: z.object({
        street: z.string(),
        zipCode: z.string().max(8),
        number: z.string().nullish(),
        city: z.string(),
        state: z.string().max(2)
    }),
    categoryId: z.number(),
})

export const returnRealEstateSchema = realEstateSchema.extend({
    id: z.number().int(),
    category: returnCategoriesSchema,
    address: returnAdressSchema,
    sold: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string()
}).omit({categoryId: true})

export const multipleRealEstateSchema = returnRealEstateSchema.omit({category: true}).array()

