import express from 'express';

import { updateNotification,getNotification } from '../controllers/notifications.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.patch('/:id', auth, updateNotification);
router.get('/',auth, getNotification);
export default router;