import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Address } from "../../entities/address.entities"
import { Category } from "../../entities/categories.entities"
import { RealEstate } from "../../entities/realEstate.entities"
import { AppError } from "../../errors/app.Error"
import { IAdress } from "../../interfaces/address.interface"
import { ICategories, IReturnCategories } from "../../interfaces/categories.interface"
import { IRealEstate, IReturnRealEstate } from "../../interfaces/realEstate.interface"
import { returnRealEstateSchema } from "../../schemas/realEstate.schema"

export const createRealEstateService = async(realEstateData: IRealEstate, addressData: IAdress): Promise<IReturnRealEstate> => {

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
    
    const findCategory = await categoryRepository.findOneBy({
        id: realEstateData.categoryId
    }) as IReturnCategories

    
    if(!findCategory) {
        throw new AppError("Category not found", 409)
    }

    const numberAddress = addressData.number === null ? addressData.number === "" : addressData.number

    const findAdress = await addressRepository.findOneBy({
        street: addressData.street,
        number: String(numberAddress),
        zipCode: addressData.zipCode

    }) as IAdress

    const address = addressRepository.create(addressData)
    await addressRepository.save(address)
    
    if(findAdress) {
        throw new AppError("Address already exists", 409)
    }

    const value = String(realEstateData.value)
    
    const realEstate: RealEstate = realEstateRepository.create({
        value: value,
        size: realEstateData.size,
        address: address,
        category: findCategory
    })

    await realEstateRepository.save(realEstate)
    
    const newRealEstate = returnRealEstateSchema.parse(realEstate)

    return newRealEstate
}