import User from "../models/User"
import Reservation from "../models/Reservation";

const userController = {
    getUser: async(req,res) =>{
        try{
            const user = await User.findById(req.cookies.idUser);
            const reservations = user.reservation.map((x) =>{
                return x;
            })
            const reservationList = [];
            for(let i = 0; i < reservations.length; i++){
                const reservation = await Reservation.findById(reservations[i])
                reservationList.push(reservation);
            }
        // res.json(req.cookies.idUser);
            if(user){
            // res.json(user);  
            res.status(200).render("user",{user:user, reservation: reservationList});
            }
            else{
                res.status(404).render("404");
            }
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    updateUser: async(req,res) =>{
        try{
            const user = await User.findByIdAndUpdate(req.cookies.idUser,req.body);
        // res.json(req.cookies.idUser);
            if(!user){
            // res.json(user);  
               return res.status(200).json("Updated not found");
            }
            const reservations = user.reservation.map((x) =>{
                return x;
            })
            const reservationList = [];
            for(let i = 0; i < reservations.length; i++){
                const reservation = await Reservation.findById(reservations[i])
                reservationList.push(reservation);
            }
            // res.status(200).render("user",{name: user.name, email: user.email, address: user.address});
            res.status(200).render("user",{user:user, reservation: reservationList});

        }
        catch(err){
            res.status(500).json(err);
        }
    },
    deleteUser: async(req,res) => {
        try{
            const user = await User.findByIdAndDelete(req.cookies.idUser);
        // res.json(req.cookies.idUser);
            if(!user){
            // res.json(user);  
               return res.status(200).json("Delete not found");
            }
            res.status(200).render("user",{message: "delete on success"});

        }
        catch(err){
            res.status(500).json(err);
        }
    },
    getAllUser: async(req,res) =>{
        try{
            const user = await User.find();
        // res.json(req.cookies.idUser);
            if(user){
            // res.json(user);  
            res.status(200).json(user);
            }
            else{
                res.status(404).json("chưa có tài khoản nào đăng kí");
            }
        }
        catch(err){
            res.status(500).json(err);
        }
    }
    
    
}

export default userController;




// const myDate = new Date();

// console.log(myDate.toLocaleDateString()); // "3/21/2023"
// console.log(myDate.toISOString()); // "2023-03-21T00:00:00.000Z"