import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
    idUser :{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    idRoom: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    nameRoom: {
        type: String,
    },
    people:{
        type: Number,
        required: true,
        default: 1,
    },
    total_price: {
        type: Number,
        default: 0,
    },
    checkInDate: {
        type: Date
    },
    checkOutDate: {
        type: Date
    }
})

 const reservation = mongoose.model('Reservation', reservationSchema);
 export default reservation;