import express from "express";
const routes = express.Router();

routes.get("/facilities",(req,res) =>{
    const getButton = false;
    return res.render("facilities",{title:"Nơi đầy đủ tiện nghi đáp ứng mọi nhu cầu giải trí", getButton: getButton});
})

export default routes;