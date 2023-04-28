import { z } from "zod";
import { addressSchema, returnAdressSchema } from "../schemas/address.schema";

export type IAdress = z.infer<typeof addressSchema>
export type IReturnAdress = z.infer<typeof returnAdressSchema>
