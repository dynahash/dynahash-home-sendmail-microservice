import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

interface Transporter {
    host: string;
    port: number;
    secure: boolean;
    auth: {
        user: string;
        pass: string;
    };
}

const transporterConfig: Transporter = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.DYNAHASH_EMAIL,
        pass: process.env.DYNAHASH_EMAIL_PASSWORD,
    },
};

export const transporter = nodemailer.createTransport(transporterConfig);