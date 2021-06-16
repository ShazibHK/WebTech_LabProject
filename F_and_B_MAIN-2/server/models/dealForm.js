import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    companyname: String,
    contactnumber: String,
    productname: String,
    addess: String,
    zipcode: String,
    email: String,
    contactpersonname: String,
    message: String,
    state: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    gstnum: String,
    dealAccept: { type: String, default: "" },
    seen: { type: String, default: "0" },
    uid: String,
})

var CreateDeal = mongoose.model('CreateDeal', postSchema);

export default CreateDeal;