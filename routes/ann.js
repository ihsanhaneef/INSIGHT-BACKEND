// router.js
import express from "express";
import controller from "../controllers/ann.js";
import { auth } from "../auth/auth.js";

const Annrouter = express.Router();

Annrouter.get("/ann", controller.anno);
Annrouter.post("/", auth, controller.create);

export default Annrouter;
