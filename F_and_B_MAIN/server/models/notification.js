import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    seen:{ type: String, default: "0" },
})

var Notification = mongoose.model('Notification', postSchema);

export default Notification;