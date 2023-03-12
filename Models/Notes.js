

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Note = new Schema({
   
   
    note: {
        type: String,
        
    }
    ,
    
    recieverid:{
        type:String,
    },
    reciever:{
        type:String,
    },
    sender:{
        type:String
    }
    ,
    time:{
        type:String
    },
    seen: {
        type: String
    },
    
});






const Notemodel = mongoose.model('Note', Note);
module.exports =Notemodel
  
