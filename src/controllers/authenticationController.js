import account from "../models/Account";
import axios from "axios";
import passport from "passport";
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const authenticationController = {
    logOut: async(req,res) =>{
        try{
            res.clearCookie('idUser')
            return res.redirect('/');
        }catch(err){
            res.status(500).json({message: err.message});
            // res.status(404).render("login",{message: "Sai mật khẩu"});
        }
    },
    loginView: async(req,res) =>{
        try{
            return res.render("login");
        }catch(err){
            res.status(500).json({message: err.message});
            // res.status(404).render("login",{message: "Sai mật khẩu"});
        } 
    },
    login: async(req,res) =>{
        try{
            const userName1 = req.body.userName;
            const passWord1 = req.body.passWord;

            // danh cho admin
            const response = (await axios.get('http://localhost:3000/all-rooms'));
            const rooms = response.data;
            const users = (await axios.get('http://localhost:3000/get_all_user')).data;
            const reservations = (await axios.get('http://localhost:3000/reservation')).data
            const totalPrices = reservations.reduce((totalPrice, reservation)=>{
                return totalPrice + reservation.total_price 
            },0)
            // const aRoom = (await axios.get(`http://localhost:3000/get-a-rooms/${idRoom}`)).data

            const user = await account.findOne({userName: req.body.userName,passWord:req.body.passWord});
            if(user.checkAdmin){
               return res.status(200).render("admin_home",{ rooms: rooms, users: users, totalPrices: totalPrices});
            }
            if(user.id){
                res.cookie("idUser", user.idUser);
                const getButton = true;
                // return res.status(200).render("home",{title:"Chúng tôi cam kết luôn mang đến cho bạn dịch vụ tốt nhất", getButton: getButton});
                return res.redirect('/');
            }
            else
            {
                res.status(404).render("login",{message: "Sai mật khẩu"});
            }

        }catch(err){
            res.status(500).json({message: err.message});
            // res.status(404).render("login",{message: "Sai mật khẩu"});
        }
    },
    admin: async(req,res) =>{
        try{
                const response = (await axios.get('/all-rooms'));
                const rooms = response.data;
                const users = (await axios.get('/get_all_user')).data;
                const reservations = (await axios.get('/reservation')).data
                const totalPrices = reservations.reduce((totalPrice, reservation)=>{
                    return totalPrice + reservation.total_price 
                },0)
                const idRoom = req.params.id;
                // const aRoom = (await axios.get(`http://localhost:3000/get-a-rooms/${idRoom}`)).data
                res.status(200).render("admin_home",{ rooms: rooms, users: users, totalPrices: totalPrices});

        }catch(err){
            res.status(500).json({message: err.message});
            // res.status(404).render("login",{message: "Sai mật khẩu"});
        }
    },
    getRooms: async(req,res) =>{
        try{
            // const rooms = await axios.get("/all_rooms");
            const response = (await axios.get('http://localhost:3000/all-rooms')).data;
            // const rooms = response.data;
            const users = (await axios.get('http://localhost:3000/get_all_user')).data;
            res.json(response);

        }catch(err){
            res.status(500).json({message: err.message});
            // res.status(404).render("login",{message: "Sai mật khẩu"});
        }
    },    
    loginGoogle: async(req, res) =>{
        try{
            const cs = passport.use(new GoogleStrategy({
                clientID: "408344986210-br8jlusqn80rvia3s2g8f8ekvi5t349v.apps.googleusercontent.com",
                clientSecret: "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",
                callbackURL: "http://localhost:3000/loginGg"
              },
              function(accessToken, refreshToken, profile, cb) {
               return {cd}
              }
            )); 
            res.json(cs);

        }catch(err){
            res.status(500).json({message: err.message});
            // res.status(404).render("login",{message: "Sai mật khẩu"});
        }
    }

}

export default authenticationController;
