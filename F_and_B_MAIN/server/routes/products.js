import express from 'express';

import { getProducts, getProduct, createProduct, updateProduct, deleteProduct, updateProductSubmission} from '../controllers/products.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getProducts);
router.post('/',auth,  createProduct);
router.patch('/:id', auth, updateProduct);
router.patch('/:id', auth, updateProductSubmission);
router.delete('/:id', auth, deleteProduct);

export default router;