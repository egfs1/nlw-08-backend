import { Request, Response } from "express";
import { NodemailerMailAdapter } from "../adapters/nodemailer/NodemailerMailAdapter";
import { PrismaFeedbacksRepository } from "../repositories/prisma/PrismaFeedbacksRepository";
import { CreateFeedbacksService } from "../services/feedbacks/CreateFeedbacksService";

export class FeedbacksController{
    
    async create(request: Request, response: Response){
        const {type, comment, screenshot} = request.body

        const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
        const nodemailerMailAdapter = new NodemailerMailAdapter()

        const createFeedbacksService = new CreateFeedbacksService(prismaFeedbacksRepository,nodemailerMailAdapter)

        await createFeedbacksService.execute({
            type,
            comment,
            screenshot
        })

        return response.status(201).send()
    }
}