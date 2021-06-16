import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    accepted:String,
    rejected:String,
    number:String,
    income:String,
    sales:String,
})

var PostTransaction = mongoose.model('PostTransaction', postSchema);

export default PostTransaction;