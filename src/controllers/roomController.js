import room from "../models/Room";

const roomController = {
    getRoom: async(req,res) =>{
        try{
            // const datas = await room.findOne({nameRoom:req.body.nameRoom});
            const data = await room.find();
            const getButton = false;
            res.status(200).render("room",{data: data,title:"Phòng khách sạn sang trọng và thoải mái", getButton: getButton });
            // res.status(200).json(data[0].nameRoom);
            // res.json(req.cookies);
            console.log(req.cookies);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    searchRoom: async(req,res) =>{
        try{
            // const datas = await room.findOne({nameRoom:req.body.nameRoom});
            // const search = req.body;
            // làm if else đến chết "Hay lắm thằng ngu"
            if(req.body.typeRoom === "Tất cả"){
                return res.status(200).redirect("/api-hotel/room")
            }
            const data = await room.find(req.body);
            console.log(req.body);
            if(data.length > 0){
                return res.status(200).render("room", {data: data });

            }
            else{
                return res.status(200).redirect("/api-hotel/room")
            }
           
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    addRoom: async(req,res) =>{
        try{
            const datas = await room.findOne({nameRoom:req.body.nameRoom});
            if(datas){
            res.status(200).json("Tên phòng đã tồn tại(Name already exists)");
            console.log("Name already exists");
            }else{
                const newRoom =  new room(req.body);
                const saveRoom = await newRoom.save();
                res.redirect('/api-hotel/admin');
            }
            // console.log(req.body)
        }
        catch(err){
            res.status(500).json(err);
        }
        
    },
    updateRoom: async(req, res, ) => {
        try{
            const update = await room.findByIdAndUpdate(req.params.id,req.body);
            if(update){
                res.status(200).redirect("/api-hotel/admin");
            }else{
                res.status(200).json("Id có cho mày tìm à(Name already exists)");
                console.log("Not found");
            }
            // console.log(req.body)
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    deleteRoom: async(req,res) =>{
        try{
            // const datas = await room.findById(req.params.id);
            const deletes = await room.deleteOne({_id:req.params.id});
            res.redirect('/api-hotel/admin');

            // if(deletes){
            // res.status.json(deletes);
            // }else{
            //     res.status(200).json("Id có cho mày tìm à(Name already exists)");
            //     console.log("Not found");
            // }
            // console.log(req.body)
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    getAllRooms: async(req,res) =>{
        try{
            const data = await room.find();
            res.status(200).json(data);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    getARooms: async(req,res) =>{
        try{
            const data = await room.findById(req.params.id);
            res.status(200).json(data);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    formUpdateRoom: async(req,res) =>{
        try{
            const data = await room.findById(req.params.id);
            res.status(200).render("updateRoom",{data: data});
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    roomDetails: async(req, res)=>{
        try{
            const data = await room.findById(req.params.id);
            res.status(200).render("room_item",{data: data});
        }
        catch(err){
            res.status(500).json(err);
        }
    }


}

export default roomController;