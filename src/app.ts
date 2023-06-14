import express from "express";
import tierRouter from "./routes/tier";
import cors from "cors";
import {json} from "body-parser";

const app = express();

app.use(cors());
app.use(json({limit:"2000kb"})); //in case we need it later

app.use("/tier",tierRouter);


app.listen("3500",() => console.log("Tier server started at port 3500"));


