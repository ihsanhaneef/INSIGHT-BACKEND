import express from "express";

import {
    cultural,
} from "../controllers/cultural.js";

const router = express.Router();

router.post('/cultural', cultural);

export default router;