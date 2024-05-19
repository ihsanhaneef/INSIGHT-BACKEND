// sponserRouter.js
import express from "express";
import {getSponser , addSponser} from "../controllers/sponser.js";

const sponserrouter = express.Router();

sponserrouter.get('/sponser', getSponser);

// added line
sponserrouter.post('/sponser', addSponser); // Add this line


export default sponserrouter;
