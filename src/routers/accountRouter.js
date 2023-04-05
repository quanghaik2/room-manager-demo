import accountController from "../controllers/accountController";
import express from "express";
const routes = express.Router();

routes.get('/register',(req,res) =>{
    res.render("register");
}).post('/register',accountController.register);




export default routes;