import express from 'express';
import mongoose from 'mongoose';

import DealForm from '../models/dealForm.js';
import UserModal from "../models/user.js";
import Notification from "../models/Notification.js"

export const seenDeal = async (req, res) => {
    const { id } = req.params;
    await DealForm.updateMany({}, {$set: {seen:"1"}},{ multi: true});

    res.json(seenDeal);
}


export default router;