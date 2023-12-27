import express from "express";

import {
    quiz,
} from "../controllers/quiz.js";

const router = express.Router();

router.post('/quiz', quiz);

export default router;