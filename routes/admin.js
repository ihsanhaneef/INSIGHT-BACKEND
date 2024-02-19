//router admin
import express from "express";

import { adminLogin, technovadata, togglePayment } from "../controllers/admin.js";
import { auth } from "../auth/auth.js";

const router = express.Router();

router.get('/register',auth, technovadata);


router.post('/login', adminLogin);

router.post("/togglepayment",auth,togglePayment)

export const adminRouter=router;

export default router;

