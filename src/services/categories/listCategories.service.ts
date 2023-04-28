import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities/categories.entities"
import { RealEstate } from "../../entities/realEstate.entities"
import { AppError } from "../../errors/app.Error"
import { IReturnListCategories } from "../../interfaces/categories.interface"
import { IReturnLstRealEstate } from "../../interfaces/realEstate.interface"
import { returnRealEstateSchema } from "../../schemas/realEstate.schema"
import {multipleRealEstateSchema} from "../../schemas/realEstate.schema"

export const listCategoriesService = async (): Promise<IReturnListCategories> => {

    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategories: Array<Category> = await categoriesRepository.find()

    return findCategories
}

export const listCategoriesWithEstate = async(categoryId: any) => {

    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category)
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findCategoryID = await categoriesRepository.findOneBy({
        id: categoryId
    })

    if(!findCategoryID) {
        throw new AppError("Category not found", 404)
    }

    const findCategories: Array<Category> = await categoriesRepository.findBy({
         
        id: categoryId
        
    }) as IReturnListCategories

    const findRealEstates: Array<RealEstate> = await realEstateRepository.findBy({
        
        category: categoryId

    })

    
    return { 
        id: categoryId,
        name: findCategories[0].name,
        realEstate: findRealEstates
    }
}