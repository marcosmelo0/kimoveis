import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities/realEstate.entities"
import { IReturnLstRealEstate } from "../../interfaces/realEstate.interface"
import { multipleRealEstateSchema } from "../../schemas/realEstate.schema"

export const listRealEstateService = async (): Promise<IReturnLstRealEstate> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findRealEstates: Array<RealEstate> = await realEstateRepository.find({
        relations: {
            address: true
        }
    })

    const realEstates = multipleRealEstateSchema.parse(findRealEstates)

    return realEstates
}