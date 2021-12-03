import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import { itemsRouter } from "./items/items.router";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(helmet);
app.use(cors);
app.use(express.json());

app.use("/api/menu/items", itemsRouter);


app.listen( port, () => {
    console.log(`http://localhost:${port}`);
});



