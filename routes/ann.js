// router.js
import express from "express";
import controller from "../controllers/ann.js";


const Annrouter = express.Router();

Annrouter.get('/ann', controller.anno);

export default Annrouter;
