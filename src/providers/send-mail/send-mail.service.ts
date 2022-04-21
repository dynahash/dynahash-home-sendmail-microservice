import { log } from "./../../utils/log";
import { transporter } from "./dynahash-transporter";
import type { UserMail } from "./../../entities/user-mail.entity";

export class SendMail {
    private static htmlGenerator(mail: UserMail): string {
        return `
            <p>
                <b>Nome: </b>${mail.name}
            </p>
            <p>
                <b>Email: </b>${mail.to}
            </p>
            <p>
                <b>Organização/Empresa: </b>${mail.organization}
            </p>
            <p>
                <b>Palavras-chave: </b>${mail.subject}
            </p>
            <p>
                <b>Número de telefone: </b>${mail.phoneNumber}
            </p>
            <b>Conteúdo:</b>

            <section>${mail.html}</section>`;
    }

    public async send(mail: UserMail) {
        const emailHtml = SendMail.htmlGenerator(mail);

        return transporter.sendMail({ ...mail, html: emailHtml, to: "dynahash@outlook.com" }).catch((err) => {
            log.error(`error in sendMail provider: ${err}`);
        });
    }
}