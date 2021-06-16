import express from 'express';
import mongoose from 'mongoose';

import DealForm from '../models/dealForm.js';
import UserModal from "../models/user.js";
import Notification from "../models/notification.js"
const router = express.Router();

export const updateNotification = async (req, res) => {
    const { id } = req.params;
    await DealForm.updateMany({}, {$set: {seen:true}},{ multi: true});
    await Notification.deleteMany({})

    const updateDeal = { dealAccept: true, _id: id };
    await DealForm.findByIdAndUpdate(id, updateDeal, { new: true });
    
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "10hr" });
    res.json(updateNotification);
}

export const getNotification = async (req, res) => {
    try {
        const deal = await Notification.find();
        res.status(200).json(deal);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;