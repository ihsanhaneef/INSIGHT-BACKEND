import express from "express";

import {
    langameRegistration,
} from "../controllers/langameregistration.js";

const router = express.Router();

router.post('/langameregistration', langameRegistration);

export default router;