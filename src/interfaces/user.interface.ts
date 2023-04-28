import { z } from "zod";
import { returnListUsersSchema, userUpdateSchema, returnUserSchema, userSchema } from "../schemas/user.schema";

export type IUser = z.infer<typeof userSchema >
export type IUserUpdate = z.infer<typeof userUpdateSchema>
export type IUserReturn = z.infer<typeof returnUserSchema >
export type IUserUpdateReturn = z.infer<typeof userUpdateSchema >
export type IUsersReturn = z.infer<typeof returnListUsersSchema >