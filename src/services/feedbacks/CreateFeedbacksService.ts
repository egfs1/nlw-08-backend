import { MailAdapter } from "../../adapters/MailAdapter"
import { FeedbacksRepository } from "../../repositories/FeedbacksRepository"

interface IRequest {
    type: string
    comment: string
    screenshot: string
}

export class CreateFeedbacksService {
    constructor(
        private feedbackRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) {}

    async execute({type, comment, screenshot}: IRequest){

        if (!type) {
            throw new Error('Type is required')
        }

        if (!comment) {
            throw new Error('Comment is Required')
        }

        if (screenshot) {
            if (!screenshot.startsWith('data:image/png;base64')){
                throw new Error('Invaled screenshot format')
            }
        } else {
            throw new Error('Screenshot is Required')
        }

        await this.feedbackRepository.create({
            type, 
            comment, 
            screenshot
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo Feedback',
            body: [
                `<div styles="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `<img src="${screenshot}"/>`,
                `</div>`
            ].join('\n')
        })
    }
}