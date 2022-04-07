import { log } from "./../../utils/log";
import { transporter } from "./dynahash-transporter";
import type { UserMail } from "./../../entities/user-mail.entity";

export class SendMail {
    private static htmlGenerator(mail: UserMail): string {
        return `
            <p>
                <b>email: </b>${mail.to}
            </p>
                <p><b>Título: </b>${mail.subject}
            </p>

            <b>Conteúdo:</b>

            <section>${mail.html}</section>`;
    }

    public static async send(mail: UserMail) {
        const emailHtml = SendMail.htmlGenerator(mail);

        return transporter.sendMail({ ...mail, html: emailHtml, to: "dynahash@outlook.com" }).catch((err) => {
            log.fatal(`error in sendMail provider: ${err}`);
        });
    }
}