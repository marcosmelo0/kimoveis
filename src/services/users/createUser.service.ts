import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { IUser, IUserReturn } from "../../interfaces/user.interface";
import { returnUserSchema } from "../../schemas/user.schema";

export const createUserService = async(userData: IUser): Promise<IUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = returnUserSchema.parse(user)

    return newUser
}
