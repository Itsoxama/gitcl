

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Siteuser = new Schema({
   
   
    name: {
        type: String,
        
    },
    
    login: {
        type: String,
        
    }
    ,
    taxes:{
        type:String,
    },
    nc:{
        type:String
    }
    
    ,
    linkedsites:[
        {
projectid:{
    
    type: String
}}
    ],
    skill: {
        type: String
    },
    client: {
        type: String
    },
    address:{
        type:String
    }
    ,
    phone:{
        type:String
    }
    ,
    
    itin:{
        type:String
    }
    ,
    status: {
        type: String
    },
    
    
    payrate: {
        type: String
    },
    otpayrate: {
        type: String
    },
    
    idno: {
        type: String
    },


    
});






const SiteUserd = mongoose.model('Siteuser', Siteuser);
module.exports =SiteUserd
  
