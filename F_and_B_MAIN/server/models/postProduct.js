import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    productname: String,
    price:String,
    quantity:String,
    selectedFile: String,
    total:String,
    comission:String,
    uid: String,
    tradeAccept:{ type: String, default:false },
    submit:{ type: String, default:false },
    status:{ type: String, default:"Not yet submitted" },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostProduct = mongoose.model('PostProduct', postSchema);

export default PostProduct;