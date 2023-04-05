import express from "express";
const routes = express.Router();

routes.get("/contact",(req,res) =>{
    const getButton = false;
    return res.render("contact.ejs",{title:"Mọi thắc mắc của quý khách hãy liên hệ với chúng tôi", getButton: getButton});
    // res.json(req.cookies.UserID);
})

export default routes;