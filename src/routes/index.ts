import { Router } from "express";
import { feedbacksRouter } from "./feedbacks.routes";

export const routes = Router()

routes.use('/feedbacks', feedbacksRouter)
