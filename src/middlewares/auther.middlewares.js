import userModel from "../models/User";

const authenticationMiddleware = async(req,res,next) => {
    if(!req.cookies.idUser){
        return res.redirect("/login");
    }

    const user = await userModel.findById(req.cookies.idUser);

    if(!user){
        return res.redirect("/login");
    }

    next();
};

export default authenticationMiddleware;