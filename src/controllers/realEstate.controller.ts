import { Request, Response } from "express"
import { IAdress } from "../interfaces/address.interface"
import { IRealEstate } from "../interfaces/realEstate.interface"
import { createRealEstateService } from "../services/realEstate/createRealEstate.service"
import { listRealEstateService } from "../services/realEstate/listRealEstate.service"

export const createRealEstateController = async(req: Request, resp: Response) => {
    
    const realEstateData: IRealEstate = req.body
    const adressData: IAdress = req.body.address


    const newRealEstate = await createRealEstateService(realEstateData, adressData)

    return resp.status(201).json(newRealEstate)
}

export const listRealEstatesController = async(req: Request, resp: Response) => {
    
    const realEstates = await listRealEstateService()
    
    return resp.json(realEstates)
}

