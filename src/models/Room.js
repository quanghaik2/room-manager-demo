import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    imgLink:{
        type: String,
    },
    nameRoom: {
        type: String,
        required: true
    },
    typeRoom:{
        type: String,
        required: true
    },
    checkBooking: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const room = mongoose.model("Room",roomSchema);
export default room;