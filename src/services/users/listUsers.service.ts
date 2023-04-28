import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { IUsersReturn } from "../../interfaces/user.interface";
import { returnListUsersSchema } from "../../schemas/user.schema";

export const listUsersService = async (): Promise<IUsersReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers: Array<User> = await userRepository.find()

    const users = returnListUsersSchema.parse(findUsers)

    return users
}