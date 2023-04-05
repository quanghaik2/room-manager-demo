import express from "express";
const routes = express.Router();

routes.get("/home",(req,res) =>{
    const getButton = true;
    res.render("home.ejs",{title:"Chúng tôi cam kết luôn mang đến cho bạn dịch vụ tốt nhất", getButton: getButton});
})

export default routes;