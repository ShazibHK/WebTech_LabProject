import express from 'express';

import { getDeals, createDeal, deleteDeal,updateDeal } from '../controllers/deals.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getDeals);
router.post('/', createDeal);
router.delete('/:id', auth, deleteDeal);
router.patch('/:id', auth, updateDeal);
export default router;