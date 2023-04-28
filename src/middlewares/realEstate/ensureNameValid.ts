import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities/realEstate.entities"
import { AppError } from "../../errors/app.Error"

export const ensureRealEstateAddValid = async(req: Request, resp: Response, next: NextFunction) => {
   
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findCategory = await realEstateRepository.findOneBy({
        address: req.body.address
    })

    if(findCategory) {
        throw new AppError("Address already exists", 409)
    }

    return next()
}