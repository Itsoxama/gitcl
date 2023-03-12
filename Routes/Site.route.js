// Importing important Jobsites
const express = require('express');
const app = express();
const Jobsiteroute = express.Router();
let Jobsite = require('../Models/Jobsite');
var nodemailer = require('nodemailer');



Jobsiteroute.route('/update').post(function(req, res) {
    Jobsite.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            Jobsitename:req.body.Jobsitename,
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

                    res.status(200).json({'Jobsite':success});
                }
                
             }
         }
    
      
    )
    

    
});

Jobsiteroute.route('/add').post(function(req, res) {

    let Jobsites = new Jobsite(req.body);
    Jobsites.save()
        .then(Jobsite => {
            res.status(200).json({'Jobsite': 'Jobsite added successfully'});
        })
        .catch(err => {
          console.log("erer")
        });
});


Jobsiteroute.route('/getall').get(function(req, res) {

    Jobsite.find(
        { }, 

       
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Jobsite':success});
                }
                
             }
         }
    
      
    )
});


Jobsiteroute.route('/find').post(function(req, res) {
    Jobsite.find(
        { _id:req.body.Jobsite_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Jobsite':success});
                }
                
             }
         }
    
      
    )
    

    
});



Jobsiteroute.route('/findjobsitebyuser').post(function(req, res) {
    Jobsite.find(
        {
            user:  { 
                $elemMatch: { userid: req.body.userio } 
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

                    res.status(200).json({'Jobsite':success});
                }
                
             }
         }
    
      
    )
    

    
});


Jobsiteroute.route('/findbyname').post(function(req, res) {
    Jobsite.find(
        { clientname:req.body.cname}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Jobsite':success});
                }
                
             }
         }
    
      
    )
    

    
});




Jobsiteroute.route('/delete').post(function(req, res) {
    console.log(req.body)
    var ids= req.body.ids
    Jobsite.deleteMany(
        { _id:{ $in: ids }}, 
    
       function (error, success) {
             if (error) {
                res.send(error)
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Jobsite':success});
                }
                
             }
         }
    
      
    )
    

    
});








module.exports = Jobsiteroute;
