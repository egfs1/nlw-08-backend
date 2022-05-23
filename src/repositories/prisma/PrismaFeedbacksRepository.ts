import { prismaClient } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../FeedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({type, comment, screenshot}: FeedbackCreateData) {
        await prismaClient.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        })
    }
}