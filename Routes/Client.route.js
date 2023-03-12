// Importing important Clients
const express = require('express');
const app = express();
const Clientroute = express.Router();
let Client = require('../Models/Cleint');
var nodemailer = require('nodemailer');



Clientroute.route('/update').post(function(req, res) {
    Client.findOneAndUpdate(
        { username:req.body._id}, 

        {$push:{
            invoicedata:{
            
                date:req.body.date,
                no:req.body.no,
                due:req.body.due,
                total:req.body.total,
                paid:req.body.paid,
                balance:req.body.balance,
                invoicedetails:req.body.data,  
                status:req.body.status,  
            }   
        } 

        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Client':success});
                }
                
             }
         }
    
      
    )
    

    
});


Clientroute.route('/updatedata').post(function(req, res) {
    console.log(req.body)
    Client.findOneAndUpdate(
        { _id:req.body._id}, 

       
       {
        
        username:req.body.username,
        address:req.body.address,
        number:req.body.number,
        terms:req.body.terms,
        markup:req.body.markup,
       }
        ,
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Client':success});
                }
                
             }
         }
    
      
    )
    

    
});


Clientroute.route('/updatefunds').post(function(req, res) {
    Client.findOneAndUpdate(
        { _id:req.body.id,'invoicedata._id':req.body.subid}, 

        

            { $set: { 
                
                "invoicedata.$.paid": req.body.paid,
                "invoicedata.$.balance": req.body.balance,
                "invoicedata.$.total": req.body.total,
                "invoicedata.$.status": req.body.status,
            
            } }

            
        ,
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Client':success});
                }
                
             }
         }
    
      
    )
    

    
});

Clientroute.route('/add').post(function(req, res) {

    let Clients = new Client(req.body);
    Clients.save()
        .then(Client => {
            res.status(200).json({'Client': 'Client added successfully'});
        })
        .catch(err => {
          console.log("erer")
        });
});


Clientroute.route('/getall').get(function(req, res) {

    Client.find(
        { }, 

       
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Client':success});
                }
                
             }
         }
    
      
    )
});


Clientroute.route('/find').post(function(req, res) {
    Client.find(
        { Client_id:req.body.Client_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Client':success});
                }
                
             }
         }
    
      
    )
    

    
});

Clientroute.route('/findbyid').post(function(req, res) {
    Client.find(
        { _id:req.body.Client_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Client':success});
                }
                
             }
         }
    
      
    )
    

    
});


Clientroute.route('/findbyname').post(function(req, res) {
    Client.find(
        { username:req.body.name}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Client':success});
                }
                
             }
         }
    
      
    )
    

    
});

Clientroute.route('/delete').post(function(req, res) {
    console.log(req.body)
    var ids= req.body.ids
    Client.deleteMany(
        { _id:{ $in: ids }}, 
    
       function (error, success) {
             if (error) {
                res.send(error)
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Client':success});
                }
                
             }
         }
    
      
    )
    

    
});


Clientroute.route('/deletedata').post(function(req, res) {
    console.log(req.body)
    var ids= req.body.ids
    Client.deleteMany(
        { _id:{ $in: ids }}, 
    
       function (error, success) {
             if (error) {
                res.send(error)
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Client':success});
                }
                
             }
         }
    
      
    )
    

    
});











module.exports = Clientroute;
