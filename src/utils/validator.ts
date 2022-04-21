import { isEmail } from "@techmmunity/utils";
import type { UserMail } from "../entities/user-mail.entity";

export class Validations {
    public static email(email: string) {
        return isEmail(email);
    }

    public static bodyLength({ name, organization, phoneNumber, subject }: UserMail) {
        const MAXLENGTH = 3;
        const MAXPHONENUMBERLENGTH = 8;
        const MAXSUBJECTLENGTH = 10;

        return name.length >= MAXLENGTH && organization.length >= MAXLENGTH && phoneNumber.length > MAXPHONENUMBERLENGTH && subject.length > MAXSUBJECTLENGTH;
    }
}
