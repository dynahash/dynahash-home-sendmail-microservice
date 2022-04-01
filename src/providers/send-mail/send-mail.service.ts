import { log } from "./../../utils/log";
import { transporter } from "./dynahash-transporter";
import type { UserMail } from "./../../entities/user-mail.entity";

export class SendMail {
    public static send(mail: UserMail) {
        transporter.sendMail(mail).catch((err) => {
            log.fatal(`error in sendMail provider: ${err}`);
        });
    }
}