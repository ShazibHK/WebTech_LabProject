import express from 'express';

import { seenDeal } from '../controllers/deals.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.patch('/:id', auth, seenDeal);
export default router;