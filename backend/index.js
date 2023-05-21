import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import postRoute from "./routes/mail.js";

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();

app.use("/", postRoute);

app.get("/", (req, res) => {
  //   const { email } = req.body;
  console.log("opened");
});

app.listen("5000", () => {
  console.log("Hiiiiii");
});
