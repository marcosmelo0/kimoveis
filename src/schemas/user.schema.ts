import { hashSync } from "bcryptjs";
import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    admin: z.boolean().default(false)
})

export const userUpdateSchema = userSchema.deepPartial().omit({admin: true})

export const returnUserSchema = userSchema.extend({
    id: z.number(),
    createdAt: z.date().or(z.string()),
    updatedAt: z.date().or(z.string()),
    deletedAt: z.date().nullable(),
}).omit({password: true})


export const returnListUsersSchema = returnUserSchema.array()