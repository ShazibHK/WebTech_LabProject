import express from 'express';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';
import CreateOrder from "../models/orderForm.js"
const router = express.Router();
const secret = 'test';

export const createOrder= async (req, res) => {
        const{
        productName,
        price,
        quantity,
        total,
        address,
        contactNumber,
        uid,
        name,
        email,
    }= req.body;
    
    const newOrderForm = new CreateOrder({
        productName,
        price,
        quantity,
        total,
        address,
        contactNumber,
        uid,
        name,
        email, 
    })
    try {
        await newOrderForm.save();
        res.status(201).json(newOrderForm );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const getOrders = async (req, res) => {
    try {
        const order = await CreateOrder.find();
        res.status(200).json(order);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const updateOrder = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const UpdateOrder = { dispatch:"dispatched", _id: id };
    await CreateOrder.findByIdAndUpdate(id, UpdateOrder, { new: true });
    res.json(201)(UpdateOrder);
}

export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No such proposal found !: ${id}`);
    const UpdateOrder = { dispatch:"dispatched"};
    await CreateOrder.findByIdAndUpdate(id,UpdateOrder, { new: true });
    res.json({ message: "Dispatched" });
}
export default router;
