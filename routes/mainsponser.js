// sponserRouter.js
import express from "express";
import {getMSponser} from "../controllers/mainsponser.js";

const msponserrouter = express.Router();

msponserrouter.get('/msponser', getMSponser);


export default msponserrouter;
