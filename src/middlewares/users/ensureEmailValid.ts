import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/app.Error";


export const ensureEmailValid = async(req: Request, resp: Response, next: NextFunction): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        email: req.body.email
    })

    if(findUser) {
        throw new AppError("Email already exists", 409)
    }

    return next()
}