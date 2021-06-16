import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

    productName:String,
    price:String,
    quantity:String,
    total:String,
    address:String,
    contactNumber:String,
    uid:String,
    name:String,
    email:String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    dispatch: {
        type: String,
        default: "Not yet dispatched",
    },

})

var CreateOrder = mongoose.model('CreateOrder', postSchema);

export default CreateOrder;