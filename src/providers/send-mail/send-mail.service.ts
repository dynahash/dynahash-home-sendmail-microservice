import { log } from "./../../utils/log";
import { transporter } from "./dynahash-transporter";
import type { UserMail } from "./../../entities/user-mail.entity";

export class SendMail {
    private static htmlGenerator(mail: UserMail): string | void {
        if (mail.html) {
            return `<p>
                <b>email: </b>${mail.to}
            </p>
                <p><b>Título: </b>${mail.subject}
            </p>
            <b>Conteúdo:</b>

            <section>${mail.html}</section>`;
        }
    }

    public static send(mail: UserMail) {
        const emailHtmlOrUndefined = SendMail.htmlGenerator(mail);

        if (emailHtmlOrUndefined) {
            return transporter.sendMail({ ...mail, html: emailHtmlOrUndefined, to: "dynahash@outlook.com" }).catch((err) => {
                log.fatal(`error in sendMail provider: ${err}`);
            });
        }

        transporter.sendMail({
            ...mail, to: "dynahash@outlook.com",
        }).catch((err) => {
            log.fatal(`error in sendMail provider: ${err}`);
        });
    }
}