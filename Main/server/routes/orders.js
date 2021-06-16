import express from 'express';

import { getOrders, createOrder,updateOrder,deleteOrder} from '../controllers/orders.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getOrders);
router.post('/', createOrder);
router.patch('/:id',updateOrder);
router.delete('/:id', auth, deleteOrder);
export default router;