import express from 'express';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';

import DealForm from '../models/dealForm.js';
import UserModal from "../models/user.js";
import Notification from "../models/notification.js"
const router = express.Router();
const secret = 'test';

export const createDeal= async (req, res) => {
    const {companyname,contactnumber,productname, addess, zipcode, email,contactpersonname,message,state,gstnum,dealAccept,uid } = req.body;
 
    const newDealForm = new DealForm({companyname,contactnumber,productname, addess, zipcode, email,contactpersonname,message,state,gstnum,dealAccept,uid
     })
    const {notificatonid}=uid;
    const newAd = new Notification({notificatonid})
    try {
        await newAd.save();
        await newDealForm.save();
        res.status(201).json(newDealForm );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const getDeals = async (req, res) => {
    try {
        const deal = await DealForm.find();
        res.status(200).json(deal);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getNotificationCount = async (req, res) => { 
    try {
        const notific = await Notification.find();
        
        res.status(200).json(notific);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getDeal = async (req, res) => { 
    const { id } = req.params;

    try {
        const deal = await DealForm.findById(id);
        
        res.status(200).json(deal);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const deleteDeal = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No such proposal found !: ${id}`);

    await DealForm.findByIdAndRemove(id);
    res.json({ message: "Proposal Declined !." });
}


export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
}

export const updateDeal = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateDeal = { dealAccept: true, _id: id };
    await UserModal.findByIdAndUpdate(id, updateDeal, { new: true });
    await DealForm.findByIdAndUpdate(id, updateDeal, { new: true });
    res.json(201)({updateDeal,token});

}

export const seenDeal = async (req, res) => {
    const { id } = req.params;
    
    const updateDeal = { dealAccept: true, _id: id };
    
    await DealForm.updateMany({}, {$set: {seen:"1"}},{ multi: true});
    res.json(seenDeal);
}

export default router;
