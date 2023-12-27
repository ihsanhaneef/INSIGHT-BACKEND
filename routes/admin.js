import express from "express";

import { technovadata } from "../controllers/admin.js";

// import {
//     debugging,
// } from "../controllers/debugging.js";

const router = express.Router();

router.get('/technova', technovadata);

export default router;

                        // replica
//  import express from "express";

// import { replicadata } from "../controllers/admin.js";
//  const router = express.Router();
                        
// router.get('/technova', technovadata);
                        
// export default router;