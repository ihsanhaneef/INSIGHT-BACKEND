import express from "express";

import {
    paperpresentation,
} from "../controllers/paperpresentation.js";

const router = express.Router();

router.post('/paperpresentation', paperpresentation);

export default router;