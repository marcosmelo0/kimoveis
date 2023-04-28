import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/users.entities"
import { AppError } from "../../errors/app.Error"

export const deleteUserService = async(idUser: number): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: idUser
    })

    if(!user) {
        throw new AppError("User already deleted", 409)
    }

    await userRepository.softRemove(user!)
}