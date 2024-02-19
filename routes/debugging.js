import express from "express";

import {
    debugging,
} from "../controllers/debugging.js";

const router = express.Router();

router.post('/debugging', debugging);

export default router;