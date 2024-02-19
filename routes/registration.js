// router technovaRegistration.js
import express from "express";

import {
    technovaRegistration,} from "../controllers/registration.js";

const router = express.Router();

router.post('/registration', technovaRegistration);

export default router;