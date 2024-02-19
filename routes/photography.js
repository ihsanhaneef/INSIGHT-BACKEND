import express from "express";

import {
    photography,
} from "../controllers/photography.js";

const router = express.Router();

router.post('/photography', photography);

export default router;