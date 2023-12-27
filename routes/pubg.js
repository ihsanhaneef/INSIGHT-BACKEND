import express from "express";

import {
    pubg,
} from "../controllers/pubg.js";

const router = express.Router();

router.post('/pubg', pubg);

export default router;