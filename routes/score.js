import express from "express";
import { createTeam, getScore, updateTeam } from "../controllers/score.js";

const router = express.Router();

router.get('/', getScore);
router.post('/', createTeam);
// router.put('/', updateTeam);


export default router;