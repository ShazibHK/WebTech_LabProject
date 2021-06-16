import express from 'express';

import { getTransactions,getTransaction, updateTransaction, createTransaction} from '../controllers/transaction.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getTransactions);
router.get('/:id', getTransaction);
router.post('/',auth, createTransaction);
router.patch('/:id/:type/:value', auth, updateTransaction);
export default router;