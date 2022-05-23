import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../MailAdapter";

export const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "55608ddf30ed0d",
      pass: "9c94ca89468472"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Eduardo Gomes <eduardogomesfs4@gmail.com>',
            subject,
            html: body
        })
    }
}