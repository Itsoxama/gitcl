

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let sitemodel = new Schema({


    clientname: {
        type: String,

    },
    
    clientid: {
        type: String,

    },
    
    sitename: {
        type: String,

    },
    no: {
        type: String,

    },
address: {
        type: String,

    },
    
    markup: {
        type: String,

    },
    status:{
        type:String
    },
    bank:{
        type:String
    },
    user: [{
        name: {
            type: String
        },
        userid: {
            type: String
        },
        payrate: {
            type: String
        },
        otpayrate: {
            type: String
        },
        skill: {
            type: String
        },

        taxes: {
            type: String,
        },
        nc: {
            type: String
        },

    }],




});






const Jobsite = mongoose.model('sitemodel', sitemodel);
module.exports = Jobsite

