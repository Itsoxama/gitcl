

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Siteatten = new Schema({
   
    username: {
        type: String,
        
    },
    
    userid: {
        type: String
    }
    ,
    projectid:{
        type:String,
    },
    chkouttime:{
        type:String
    }
    ,
    workinghours:{
        type:String
    }
    ,
    
    date:{
        
        type:String,
    },
    time:{
        
        type:String,
    },
    
    projectname:{
        
        type:String,
    },
    workingtime:{
        type:Number
    }
    ,
    
    late:{
        type:String
    }
    ,
    
    status: {
        type: String
    },

},{
    timestamps:true
});






const Siteatt = mongoose.model('Siteatten', Siteatten);
module.exports =Siteatt
  
