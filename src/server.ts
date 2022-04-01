import { log } from "./utils/log";
import { app } from "./app";

const LOCAL = 3000;

const HOST = process.env.PORT;

const PORT = HOST || LOCAL;

app.listen(PORT, async () => {
    log.info(`server has been started, for used the port ${PORT}`);
});