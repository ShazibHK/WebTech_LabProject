import express from 'express';
import mongoose from 'mongoose';
import PostTransaction from '../models/postTransaction.js';
import CreateOrder from "../models/orderForm.js"
const router = express.Router();

export const getTransactions= async (req, res) => { 
    try {
        const postTransaction = await PostTransaction.findById("60c662bea27bec0968e9ad5e");
        res.status(200).json(postTransaction);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTransaction = async (req, res) => { 
    const { id } = req.params;
    try {
        const post = await PostTransaction.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTransaction = async (req, res) => {
    const product = req.body;
    const newPostProduct = new PostTransaction({ ...product, createdAt: new Date().toISOString() })
    try {
        await newPostProduct.save();
        res.status(201).json(newPostProduct );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const updateTransaction= async (req, res) => {
    
    const postTransaction = await PostTransaction.findById("60c662bea27bec0968e9ad5e");
    const { id,type,value } = req.params;
    
    if(type==="accepted")
    {
        const updateDeal = { accepted: parseInt(postTransaction.accepted)+ parseInt(value), _id: id };
        await PostTransaction.findByIdAndUpdate(id, updateDeal, { new: true });
        res.json(updateDeal);
    }
    else if(type==="rejected")
    {
        const updateDeal = { rejected: parseInt(postTransaction.rejected)+ parseInt(value), _id: id };
        await PostTransaction.findByIdAndUpdate(id, updateDeal, { new: true });
        res.json(updateDeal);
    }
    else if(type==="deduct")
    {
        const updateDeduct = { number: parseInt(postTransaction.number)+ value, _id: id };
        await PostTransaction.findByIdAndUpdate(id, updateDeduct, { new: true });
        res.json(updateDeduct);
    }
    else if(type==="sales")
    {
        const updateSales = { number: parseInt(postTransaction.sales)+ parseInt(value), _id: id };
        await PostTransaction.findByIdAndUpdate(id, updateSales, { new: true });
        res.json(updateSales);
    }
    else if(type==="income")
    {
        const updateIncome = { number: parseInt(postTransaction.income)+ parseInt(value)/100, _id: id };
        await PostTransaction.findByIdAndUpdate(id, updateIncome, { new: true });
        res.json(updateIncome);
    }
  
    else
    {
        const updateDeal = { number: parseInt(postTransaction.number)+ parseInt(value), _id: id };
        await PostTransaction.findByIdAndUpdate(id, updateDeal, { new: true });
        res.json(updateDeal);
    }
}

export default router;