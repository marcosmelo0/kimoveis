import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities/categories.entities"
import { ICategories } from "../../interfaces/categories.interface"
import { returnCategoriesSchema } from "../../schemas/categories.schema"

export const createCategoryService = async(categoryData: ICategories): Promise<Category> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const category: Category = categoryRepository.create(categoryData)

    await categoryRepository.save(category)

    const newCategory = returnCategoriesSchema.parse(category)

    return newCategory
}