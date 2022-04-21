import { sendMailController } from "./../api/send-mail/controller";
import type { Request, Response } from "express";
import { Router } from "express";
import { SendMail } from "../providers/send-mail/send-mail.service";

export const router = Router();

router.post("/sendmail", (req: Request, res: Response) => sendMailController(req, res, new SendMail()));