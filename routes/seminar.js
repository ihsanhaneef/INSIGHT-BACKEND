import express from "express";

import {
    seminar,
} from "../controllers/seminar.js";

const router = express.Router();

router.post('/seminar', seminar);

export default router;