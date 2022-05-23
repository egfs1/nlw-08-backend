import { Router } from "express";
import { FeedbacksController } from "../controllers/FeedbacksController";

export const feedbacksRouter = Router()
const feedbacksController = new FeedbacksController()

feedbacksRouter.post('/', feedbacksController.create)
