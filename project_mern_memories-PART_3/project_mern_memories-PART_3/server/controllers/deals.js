import express from 'express';
import mongoose from 'mongoose';

import DealForm from '../models/dealForm.js';

const router = express.Router();

export const createDeal= async (req, res) => {
    const {companyname,contactnumber,productname, addess, zipcode, email,contactpersonname,message,state, } = req.body;

    const newDealForm = new DealForm({companyname,contactnumber,productname, addess, zipcode, email,contactpersonname,message,state, })

    try {
        await newDealForm.save();

        res.status(201).json(newDealForm );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const getDeals = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await DealForm.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;