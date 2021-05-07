import express from 'express';
import mongoosee from 'mongoose';
import PostMessage from '../models/postMessage.js';
const router=express.Router();
import {getProduct,createProduct} from '../controllers/posts.js'

router.get('/',getProduct);
router.post('/',createProduct);

export default router;