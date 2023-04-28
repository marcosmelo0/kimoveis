import { Request, Response } from "express"
import { createShedulesService } from "../services/shedules/createShedules.service"

export const createSchedulesController = async(req: Request, resp: Response) => {
    
    const scheduleData = req.body
    const userId = req.user.id

    const newSchedule = await createShedulesService(scheduleData, userId)
    
    return resp.status(201).json(newSchedule)
}