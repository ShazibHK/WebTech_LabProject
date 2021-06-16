import express from 'express';
import mongoose from 'mongoose';
import PostProduct from '../models/PostProduct.js';
const router = express.Router();

export const getProducts = async (req, res) => { 
    try {
        const postProduct = await PostProduct.find();
        res.status(200).json(postProduct);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProduct = async (req, res) => { 
    const { id } = req.params;
    try {
        const post = await PostProduct.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;
    const newPostProduct = new PostProduct({ ...product, createdAt: new Date().toISOString() })
    try {
        await newPostProduct.save();
        res.status(201).json(newPostProduct );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { productname,selectedFile,submit } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedProduct = { productname,selectedFile,submit, _id: id };
    await PostProduct.findByIdAndUpdate(id, updateProduct, { new: true });
    res.json(updatedProduct);
}

export const updateProductSubmission = async (req, res) => {
    const { id } = req.params;
    const updatedProduct = { submit:true, _id: id };
    await PostProduct.findByIdAndUpdate(id, updateProduct, { new: true });
    res.json(updatedProduct);
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await PostProduct.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}

export default router;