var mongoose = require('mongoose');
module.exports=mongoose.model('teacher',{
    username:{
        type:String
    },
    password:{
        type:String
    }
})