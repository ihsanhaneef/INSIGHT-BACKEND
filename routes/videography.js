import express from "express";

import {
    videography,
} from "../controllers/videography.js";

const router = express.Router();

router.post('/videography', videography);

export default router;