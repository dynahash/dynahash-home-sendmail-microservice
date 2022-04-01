import { sendMailController } from "./../api/send-mail/controller";
import { Router } from "express";

export const router = Router();

router.post("/sendmail", sendMailController);