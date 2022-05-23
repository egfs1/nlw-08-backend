import { CreateFeedbacksService } from "./CreateFeedbacksService"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const createFeedback = new CreateFeedbacksService(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit Feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(createFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,test'
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it('should not be able to submit a feedback without type', async () => {
        await expect(createFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,test'
        })).rejects.toThrow()
    })

    it('should not be able to submit a feedback without comment', async () => {
        await expect(createFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,test'
        })).rejects.toThrow()
    })

    it('should not be able to submit a feedback without screenshot', async () => {
        await expect(createFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: ''
        })).rejects.toThrow()
    })

    it('should not be able to submit a feedback with a invalid screenshot', async () => {
        await expect(createFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'test.jpg'
        })).rejects.toThrow()
    })
})