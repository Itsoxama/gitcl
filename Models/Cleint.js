

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Clientdata = new Schema({
   
   
    username: {
        type: String,
        
    }
    ,
    markup:{

        type: Number,
    },

    address:{
        type:String,
    },
    number:{
        type:String
    },
    terms: {
        type: String
    },
    
    pending: {
        type: String
    },
    invoicedata:[{
        

        status: {
            type: String
        },

        date: {
            type: String
        },
        no:{
            
            type: String
        },
        
    due: {
        type: String
    },
    total:{
        
        type: String
    },
    paid:{
        
        type: String
    },
    
    balance:{
        
        type: String
    },
    invoicedetails:[
        {
            
    empname:{

        type: String
    },
    
    skill:{
        
        type: String
    },
    
    hrs:{
        
        type: String
    },
    
    payrate:{
        
        type: String
    },
    
    otpayrate:{
        
        type: String
    },
    
    othrs:{
        
        type: String
    },
    total:{
        
        type: String
    }


        }
    ]


    }]
    
});






const Client = mongoose.model('Clientdata', Clientdata);
module.exports =Client
  
