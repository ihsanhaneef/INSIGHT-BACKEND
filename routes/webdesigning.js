import express from "express";

import {
    webdesigning,
} 
 from "../controllers/webdesigning.js";

const router = express.Router();

router.post('/webdesigning', webdesigning);

export default router;