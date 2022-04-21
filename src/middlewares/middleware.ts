import { StatusCodeEnum } from "./../enums/status-code";
import rateLimit from "express-rate-limit";
import cors from "cors";
import { app } from "../app";
import type { NextFunction, Request, Response } from "express";

const MINUTES = 15;
const SECONDS = 60;
const MILLISECONDS = 1000;

export const rateLimitServer = rateLimit({
    windowMs: MINUTES * SECONDS * MILLISECONDS,
    max: 5,
    message:
    {
        statusCode: StatusCodeEnum.BAD_REQUEST,
        body: {
            error: "Limite de requisições ultrapassada, aguarde 15 minutos! (The request limit has been exceeded please wait 15 minutes)",
        },
    },
});

export const corsConfig = (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    app.use(cors());
    next();
};