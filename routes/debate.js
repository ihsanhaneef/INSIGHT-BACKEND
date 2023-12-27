import express from "express";

import {
    debate,
} from "../controllers/debate.js";

const router = express.Router();

router.post('/debate', debate);

export default router;