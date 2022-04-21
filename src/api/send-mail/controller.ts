import { Validations } from "./../../utils/validator";
import { log } from "./../../utils/log";
import type { SendMail } from "./../../providers/send-mail/send-mail.service";
import { StatusCodeEnum } from "./../../enums/status-code";
import type { Request, Response } from "express";

export const sendMailController = async (req: Request, res: Response, sendMail: SendMail): Promise<Response> => {
    const body = req.body;
    const validate = Validations.bodyLength(body);
    if (!validate) {
        return res.status(StatusCodeEnum.FORBIDDEN).json({
            statusCode: StatusCodeEnum.FORBIDDEN,
            body: {
                error: "Invalid param",
            },
        });
    }

    if (!body.html || !body.name || !body.organization || !body.phoneNumber && body.subject && body.to) {
        return res.status(StatusCodeEnum.FORBIDDEN).json({
            statusCode: StatusCodeEnum.FORBIDDEN,
            body: {},
        });
    }

    try {
        await sendMail.send(body);
    } catch (err) {
        return res.status(StatusCodeEnum.CONFLICT).json(err.message);
    }

    log.info("Email has been sended");

    return res.status(StatusCodeEnum.SUCCESS).json({
        statusCode: StatusCodeEnum.SUCCESS,
        body: {},
    });
};