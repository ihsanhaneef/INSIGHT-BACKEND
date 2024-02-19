// liveevent.js
import express from "express";
import { auth } from "../auth/auth.js";
import { getlive, updateColorById } from "../controllers/liveevent.js";


const router = express.Router();

router.get("/", getlive);
router.post("/:id",auth,updateColorById); // Define the PUT endpoint for updating event color

export default router;
