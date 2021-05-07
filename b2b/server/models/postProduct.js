import mongoose from 'mongoose';
const postSchema=mongoose.Schema({
    id:String,
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    quantity:{
        type:Number,
        default:0,
    },
    createdAt:{
        type:Date,
        default:new Date(), 
    }
});


const PostProduct=mongoose.model('PostProduct',postSchema);
export default PostProduct;