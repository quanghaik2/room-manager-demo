import userModel from "../models/User";

const authenticationMiddleware = async(req,res,next) => {
    if(!req.cookies.idUser){
        return res.redirect("/api-hotel/login");
    }

    const user = await userModel.findById(req.cookies.idUser);

    if(!user){
        return res.redirect("/api-hotel/login");
    }

    next();
};

export default authenticationMiddleware;