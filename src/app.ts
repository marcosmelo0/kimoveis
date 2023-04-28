import "express-async-errors";
import express, { Application } from "express";
import { handdleError } from "./errors/handleError";
import { router } from "./routers";

const app: Application = express();
app.use(express.json());

app.use("", router)

app.use(handdleError);

export default app