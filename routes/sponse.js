// sponserRouter.js
import express from "express";
import {getSponser} from "../controllers/sponser.js";

const sponserrouter = express.Router();

sponserrouter.get('/sponser', getSponser);


export default sponserrouter;
