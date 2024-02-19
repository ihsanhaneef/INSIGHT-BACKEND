import express from "express";

import {
    replicaRegistration,
} from "../controllers/replicaregistration.js";

const router = express.Router();

router.post('/replicaregistration', replicaRegistration);

export default router;