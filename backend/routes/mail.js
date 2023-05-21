import express from "express";
import { handlePost } from "../controllers/mail.js";

let router = express.Router();

router.post("/:mail", handlePost);

export default router;
