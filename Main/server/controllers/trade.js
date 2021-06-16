import express from 'express';
import mongoose from 'mongoose';
import PostProduct from '../models/PostProduct.js';
import PostTransaction from '../models/postTransaction.js';
const router = express.Router();

export const updateTrade = async (req, res) => {
    const { id,ac } = req.params;
    const updateDeal = { submit: true,status:ac, _id: id };
    await PostProduct.findByIdAndUpdate(id, updateDeal, { new: true });
    await TradeT.findByIdAndUpdate({},{$set: {income:"1"}}, { multi: true });
    res.json(updateTrade);
}