import express from "express";

import {
       treasurehunt,
} from "../controllers/treasurehunt.js";

const router = express.Router();

router.post('/treasurehunt', treasurehunt);

export default router;