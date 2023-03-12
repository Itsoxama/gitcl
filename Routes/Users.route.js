// Importing important Users
const express = require('express');
const app = express();
const Userroute = express.Router();
let User = require('../Models/User');
var nodemailer = require('nodemailer');



Userroute.route('/update').post(function(req, res) {
    User.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            Username:req.body.Username,
            fullname:req.body.fullname,



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'User':success});
                }
                
             }
         }
    
      
    )
    

    
});

Userroute.route('/add').post(function(req, res) {

    let Users = new User(req.body);
    Users.save()
        .then(User => {
            res.status(200).json({'User': 'User added successfully'});
        })
        .catch(err => {
          console.log("erer")
        });
});


Userroute.route('/getall').get(function(req, res) {

    User.find(
        { }, 

       
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'User':success});
                }
                
             }
         }
    
      
    )
});


Userroute.route('/find').post(function(req, res) {
    User.find(
        { user_id:req.body.user_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'User':success});
                }
                
             }
         }
    
      
    )
    

    
});

Userroute.route('/login').post(function(req, res) {
    User.findOne(
        { email:req.body.email,
        password:req.body.pass}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('error')
                }
                else{

                    res.status(200).json({'User':success});
                }
                
             }
         }
    
      
    )
    

    
});











module.exports = Userroute;
