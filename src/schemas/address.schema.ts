import { z } from "zod";

export const addressSchema = z.object({
    street: z.string(),
    zipCode: z.string(),
    number: z.string().nullish(),
    city: z.string(),
    state: z.string(),
})

export const returnAdressSchema = addressSchema.extend({
    id: z.number()
})