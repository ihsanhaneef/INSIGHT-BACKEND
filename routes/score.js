// scoreboard router.js
import express from "express";
import { allScore, createTeam, getScore, updateAllScores, updateTeam } from "../controllers/score.js";
import { auth } from "../auth/auth.js";

const router = express.Router();

router.get('/', getScore);
router.post('/', createTeam);
// router.put('/', updateTeam);

router.get('/all', allScore);
router.post('/all',auth, updateAllScores);

export default router;