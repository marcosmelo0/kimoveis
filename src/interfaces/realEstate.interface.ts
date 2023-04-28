import { z } from "zod";
import { multipleRealEstateSchema, realEstateSchema, returnRealEstateSchema } from "../schemas/realEstate.schema";

export type IRealEstate = z.infer<typeof realEstateSchema>
export type IReturnRealEstate = z.infer<typeof returnRealEstateSchema>
export type IReturnLstRealEstate = z.infer<typeof multipleRealEstateSchema>
