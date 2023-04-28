import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/app.Error";
import { IUser, IUserReturn, IUserUpdate, IUserUpdateReturn } from "../../interfaces/user.interface";
import { returnUserSchema } from "../../schemas/user.schema";

export const updateUserService = async(newUserData: IUser, idUser: number): Promise<IUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUserData: User | null = await userRepository.findOneBy({
        id: idUser
    })


    const user = userRepository.create({
        ...oldUserData!,
        ...newUserData!
    })

    await userRepository.save(user)

    const updatedUser = returnUserSchema.parse(user)

    return updatedUser
}