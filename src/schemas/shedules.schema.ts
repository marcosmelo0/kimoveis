import { z } from "zod";
import { returnRealEstateSchema } from "./realEstate.schema";
import { returnUserSchema } from "./user.schema";

export const shedulesSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().int(),
})

export const returnSchedulesSchema = shedulesSchema.extend({
    id: z.number(),
    user: returnUserSchema,
    realEstateId: returnRealEstateSchema,
}).omit({userId: true, realEstateId: true})


