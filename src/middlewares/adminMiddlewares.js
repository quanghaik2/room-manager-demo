import axios from "axios";

import userModel from "../models/User";
import Account from "../models/Account";
import reservation from "../models/Reservation";

const adminMiddleware = async(req,res,next) => {

    const account = await Account.findById(req.cookies.idUser);

    if(!account){
        return res.redirect("/login");
    }
    if(!account.checkAdmin){
        return res.redirect("/");
    }
    next();
};

export default adminMiddleware;