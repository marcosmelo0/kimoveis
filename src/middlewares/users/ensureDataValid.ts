import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const ensureDataValid = (schema: ZodTypeAny) => (req: Request, resp: Response, next: NextFunction) => {

    const validatedData = schema.parse(req.body)

    req.body = validatedData

    return next()
}