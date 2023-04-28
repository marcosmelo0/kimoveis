import { z } from "zod";
import { returnSchedulesSchema, shedulesSchema } from "../schemas/shedules.schema";

export type IShedule = z.infer<typeof shedulesSchema>
export type IReturnShedule = z.infer<typeof returnSchedulesSchema>

export interface IScheduleMessage {
    message: string
}