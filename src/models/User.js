import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    reservation: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reservation"
        }
    ]

})

const userModel = mongoose.model("User",userSchema);

export default userModel;
 