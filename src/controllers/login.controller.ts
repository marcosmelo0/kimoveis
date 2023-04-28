import { Request, Response } from "express";
import { ILogin } from "../interfaces/login.interface";
import { LoginService } from "../services/login/login.service";

export const loginController = async(req: Request, resp: Response): Promise<Response> => {

    const loginData: ILogin = req.body

    const token = await LoginService(loginData)

    return resp.json({
        token: token
    })
}