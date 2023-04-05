import Account from "../models/Account";
import User from "../models/User";

const accountController = {
    register: async(req,res) =>{
        try{
            // const user = await User.create({name: req.body.name,email: req.body.email, phone: req.body.phone, address: req.body.address})
            // const newAccount = new account({userName: req.body.userName, passWord: req.body.passWord, idUser: user.id});
            const account = await Account.findOne({userName: req.body.userName});
            if(!account){
            const user = await User.create(req.body)
            const newAccount = new Account({userName: req.body.userName, passWord: req.body.passWord, idUser: user.id});
            const saveAccount = await newAccount.save();
            res.cookie("idUser", user.id);
            console.log(saveAccount);
            res.status(200).render("home");
            }
            else{
                res.status(200).json(account);
            }
            
        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    }
}

export default accountController;