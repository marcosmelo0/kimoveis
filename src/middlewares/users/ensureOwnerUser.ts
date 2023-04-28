import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors/app.Error";

export const ensureOwnerUser = async(req: Request, resp: Response, next: NextFunction): Promise<void> => {
    const userId: number = Number(req.params.id)
    const errorNumber = userId === req.user.id
    const admin = req.user.admin

    if(!admin && !errorNumber) {
        throw new AppError("Insufficient permission", 403)
    }
    
    return next()
}
