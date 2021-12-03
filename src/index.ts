import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import { itemsRouter } from "./items/items.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(helmet());
app.use(cors);
app.use(express.json());

console.log("jump on router");

app.use("/", itemsRouter);

app.use(errorHandler);
app.use(notFoundHandler);


app.listen( port, () => {
    console.log(`http://localhost:${port}`);
});



