import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/app.Error";
import { ILogin } from "../../interfaces/login.interface";
import  jwt  from "jsonwebtoken";
import "dotenv/config"
import { Repository } from "typeorm";

export const LoginService = async(loginData: ILogin): Promise<string | undefined> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: loginData.email
    })

    const passwordMatch = await compare(loginData.password, String(user?.password))
    
    
    if(user && passwordMatch) {
        const token: string = jwt.sign(
            {
                admin: user!.admin,
            },
            String(process.env.SECRET_KEY!),
            {
                expiresIn: String(process.env.EXPIRES_IN),
                subject: String(user!.id)
            }
        )
    
        return token
    }
    
    throw new AppError("Invalid credentials", 401)


  /*   if(! await passwordMatch) {
        throw new AppError("Invalid credentials", 401)
    } */

}   