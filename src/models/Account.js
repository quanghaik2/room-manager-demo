import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    passWord: { 
        type: String,
        required: true
    },
    checkAdmin: {
        type: Boolean,
        default: false
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
    }
})

const account = mongoose.model('Account', accountSchema);
export default account;