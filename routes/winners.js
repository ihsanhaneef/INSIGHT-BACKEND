// winnerRouter.js
import express from "express";
import {getWinner, createTeam } from "../controllers/winners.js";

const winnerrouter = express.Router();

winnerrouter.get('/winners', getWinner);
winnerrouter.post('/winners', createTeam);

export default winnerrouter;
