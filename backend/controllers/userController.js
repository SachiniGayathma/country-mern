const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');

exports.registerUser = async(req,res) =>{

    const{email,phone,password,name,country} = req.body;
    try{


        if(!email || !phone || !password || !name || !country) return res.status(400).json({message : "All The Fileds Should be Filled"});

        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({

            email : email,
            phone : phone,
            password : hashedPassword,
            name : name,
            country : country
        });

        const response = await user.save();
        if(!response) return res.json({err : "Error Occurred in Registering User"});
        return res.status(202).json({message : "User Registred Successfully"});

        

    }catch(err){
       res.status(500).json({err : "Server Error"});
    }
}