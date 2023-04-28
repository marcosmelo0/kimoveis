import { Request, Response } from "express"
import { ICategories } from "../interfaces/categories.interface"
import { createCategoryService } from "../services/categories/createCategories.service"
import { listCategoriesService, listCategoriesWithEstate } from "../services/categories/listCategories.service"

export const createCategoriesController = async(req: Request, resp: Response) => {
    
    const categoryData: ICategories = req.body

    const newCategory = await createCategoryService(categoryData)

    return resp.status(201).json(newCategory)
}

export const listCategoriesController = async(req: Request, resp: Response) => {
    
    const newCategory = await listCategoriesService()

    return resp.json(newCategory)
}

export const listCategoriesWithEstateController = async(req: Request, resp: Response) => {
    
    const categoryId = Number(req.params.id)

    const realEstates = await listCategoriesWithEstate(categoryId)
    
    return resp.json(realEstates)
}