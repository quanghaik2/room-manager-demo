import reservation from '../models/Reservation'
import Room from '../models/Room';
import User from '../models/User';

const reservationController = 
{
    bookingRoom: async(req,res) =>{
        try{
            // const newReservation = new reservation({idUser: req.cookies.idUser , idRoom: req.params.idRoom, checkInDate: req.body.checkInDate, checkOutDate: req.body.checkOutDate})
            // const saveReservation = await newReservation.save();
            // console.log(req.cookies.UserID);
            res.status(200).render("booking_room",{id: req.params.idRoom});
        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    },

    reservationRoom : async(req,res) => {
        try{
            const room = await Room.findById(req.params.idRoom);
            const checkInDate = new Date(req.body.checkInDate);
            const checkOutDate = new Date(req.body.checkOutDate);
            const checkHour = checkOutDate - checkInDate;
            const Hours = Math.floor(checkHour / (1000 * 60 * 60));
            if(Hours < 0){
               return res.redirect(`/api-hotel/booking_room/${room.id}`)
            }
            const total_price = (Hours * room.price)/24;
            console.log(Hours);
            const newReservation = new reservation({idUser: req.cookies.idUser , idRoom: room.id,nameRoom: room.nameRoom, checkInDate: checkInDate, checkOutDate: checkOutDate,people: req.body.people, total_price: total_price })
            const saveReservation = await newReservation.save();
            if(saveReservation){
                await Room.findByIdAndUpdate(room.id,{checkBooking: true}) 
                await User.findByIdAndUpdate(req.cookies.idUser, {$push: {reservation: saveReservation.id}})
                return res.redirect('/api-hotel/user');
            }else{
               return res.status(400).json("Đăng kí thất bại");
            }
        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    },
    getAllReservation : async(req,res) => {
        try{
            const Reservation = await reservation.find({});
            if(!Reservation){
                return res.status(404).json({message: "Không có đơn nào được đặt"});
            }
            res.status(200).json(Reservation);
        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    },
    getAReservation: async(req,res) =>{
        try{
            const Reservation = await reservation.find(req.body);
            if(!Reservation){
                return res.status(404).json({message: "Không có đơn nào được đặt"});
            }
            res.status(200).json(Reservation);
        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    },
    updateReservation: async(req,res) =>{
        try{
            const Update = await reservation.findByIdAndUpdate(req.params.id,req.body);
            if(!Update){
                return res.status(404).json({message:"Update not found"});
            }
            res.status(200).json(Update);
        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    },
    deleteReservation: async(req,res) => {
        try{
            const Reservation = await reservation.findById(req.params.id);
            const idRoom = Reservation.idRoom;
            const Delete = await reservation.findByIdAndDelete(req.params.id);
            if(!Delete){
                // res.status(200).json("delete failed");
                res.status(404).render("404");
            }
            await Room.findByIdAndUpdate(idRoom,{checkBooking: false}) 
            await User.findByIdAndUpdate(req.cookies.idUser, {$pull: {reservation: req.params.id}})
            res.redirect('/api-hotel/user');
        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    },
    getReservationUser: async(req,res) =>{
        try{
            const Reservation = await reservation.find({idUser: req.params.idUser});
            console.log(Reservation);
                res.status(200).render("reservationUser",{reservation: Reservation});        
        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    }

}

export default reservationController;