import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { RealEstate } from "../../entities/realEstate.entities"
import { Schedule } from "../../entities/shedules.entities"
import { AppError } from "../../errors/app.Error"
import { IReturnShedule, IScheduleMessage, IShedule } from "../../interfaces/shedules.interface"

export const createShedulesService = async(shedulesData: IShedule, userId: number): Promise<IScheduleMessage> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const findUser = await userRepository.findOneBy({
        id: userId
    })
    
    const findRealEstate = await realEstateRepository.findOneBy({
        id: shedulesData.realEstateId
    }) 
    
    if(!findRealEstate) {
        throw new AppError("RealEstate not found", 404)
    }

    const shedule: Schedule = scheduleRepository.create({
        ...shedulesData,
        user: findUser!,
        realEstate: findRealEstate
    })
    
    await scheduleRepository.save(shedule)
    
    return {
        message: "Schedule created"
    }
}