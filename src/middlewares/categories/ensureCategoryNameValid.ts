import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities/categories.entities"
import { AppError } from "../../errors/app.Error"

export const ensureCategoryNameValid = async(req: Request, resp: Response, next: NextFunction) => {
   
    const categoriesRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategory = await categoriesRepository.findOneBy({
        name: req.body.name
    })

    if(findCategory) {
        throw new AppError("Category already exists", 409)
    }

    return next()
}