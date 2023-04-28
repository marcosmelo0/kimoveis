import { Request, Response } from "express"
import { IUser, IUserUpdate } from "../interfaces/user.interface"
import { createUserService } from "../services/users/createUser.service"
import { deleteUserService } from "../services/users/deleteUser.service"
import { listUsersService } from "../services/users/listUsers.service"
import { updateUserService } from "../services/users/updateUser.service"

export const createUserController = async (req: Request, resp: Response) => {

    const userData: IUser = req.body

    const user = await createUserService(userData)

    return resp.status(201).json(user)
}

export const listUsersController = async(req: Request, resp: Response) => {
    
    const users = await listUsersService()

    return resp.json(users)
}

export const updatedUserController = async(req: Request, resp: Response) => {

    const userData: IUser = req.body
    const idUser = Number(req.params.id)

    const updatedUser = await updateUserService(userData, idUser)

    return resp.json(updatedUser)
}

export const deleteUserController = async(req: Request, resp: Response) => {

    const userId: number = Number(req.params.id)

    const deleteUser = await deleteUserService(userId)

    return resp.status(204).send()
}