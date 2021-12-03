import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(helmet);
app.use(cors);
app.use(express.json());


app.listen( port, () => {
    console.log(`http://localhost:${port}`);
});



