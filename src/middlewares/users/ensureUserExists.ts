import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors/app.Error"

export const ensureUserExist = async(req: Request, resp: Response, next: NextFunction): Promise<void> => {
    const userId: number = Number(req.params.id)

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUserData: User | null = await userRepository.findOneBy({
        id: userId
    })

    if(!oldUserData) {
        throw new AppError("User not found", 404)
    }
    return next()
}