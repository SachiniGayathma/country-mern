const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email:{type:String, required : true},
    phone : {type : Number, required : true},
    password : {type : String, required : true},
    name : {type : String, required : true},
    country : {type : String, required : true},
    
})

const User = mongoose.model("User", userSchema);
module.exports = User;