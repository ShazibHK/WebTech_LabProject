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
})

var CreateDeal = mongoose.model('CreateDeal', postSchema);

export default CreateDeal;