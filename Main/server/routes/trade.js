import express from 'express';

import { updateTrade } from '../controllers/trade.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.patch('/:id/:ac', auth, updateTrade);
export default router;