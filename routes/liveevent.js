// routes/liveevent.js
import express from "express";
import { getlive } from "../controllers/liveevent.js";

const router = express.Router();
router.get("/", getlive);

const liveEventRouter = router;
export default liveEventRouter;