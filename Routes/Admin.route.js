// Importing important Admins
const express = require('express');
const app = express();
const Adminroute = express.Router();
let Admin = require('../Models/Admin');
var nodemailer = require('nodemailer');
const date = require('date-and-time');

Adminroute.route('/deletedata').post(function(req, res) {
    console.log(req.body)
    var ids= req.body.ids
    Admin.deleteMany(
        { _id:{ $in: ids }}, 
    
       function (error, success) {
             if (error) {
                res.send(error)
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});

Adminroute.route('/login').post(function(req, res) {
    Admin.findOne(
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

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});

Adminroute.route('/login2').post(function(req, res) {
    Admin.findOne(
        { email:req.body.email}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('error')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});

Adminroute.route('/update').post(function(req, res) {
    Admin.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            email:req.body.email,
            password:req.body.password,
            site:req.body.site,
            stream:req.body.stream,
            presence:req.body.presence,
            productivity:req.body.productivity,
            staff:req.body.staff,
            company:req.body.company,
            snaps:req.body.snaps,
            apps:req.body.apps,
            gps:req.body.gps,
            leave:req.body.leave,
            note:req.body.notes,
            reports:req.body.reports,
            admin:req.body.admin,

        },
    
       function (error, success) {
             if (error) {
                console.log(error)
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});

Adminroute.route('/updateptime').post(function(req, res) {
    Admin.findOneAndUpdate(
        { userid:req.body.user_id,
            date:req.body.date
            }, 
        {
            
            $inc:{
                workingtime:1}



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});

Adminroute.route('/updateitime').post(function(req, res) {
    Admin.findOneAndUpdate(
        { userid:req.body.user_id,
        date:req.body.date
        }, 

        {
            
            $inc:{
                Idletime:1}



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});


Adminroute.route('/updatetime').post(function(req, res) {
    console.log(req)
    Admin.findByIdAndUpdate(
        { _id:req.body._id}, 

        {
            chkouttime:req.body.time,



        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});

Adminroute.route('/add').post(function(req, res) {

    let Admins = new Admin(req.body);
    Admins.save()
        .then(Admin => {
            res.status(200).json({'Admin': 'Admin added successfully'});
            
        })
        .catch(err => {
      
            res.status(200).json({'Admin':'exist'});
        });
});


Adminroute.route('/getall').get(function(req, res) {

    Admin.find(
        { }).sort({createdAt: -1}).exec(

       
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
});




Adminroute.route('/find').post(function(req, res) {
    Admin.find(
        { Admin_id:req.body.Admin_id}, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});

Adminroute.route('/finduserdata').post(function(req, res) {
    Admin.find(
        { userid:req.body.userid}).sort({createdAt: -1}).exec(
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});


Adminroute.route('/findcatt').post(function(req, res) {
    Admin.find(
        { date:req.body.date},
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});


Adminroute.route('/time').get(function(req, res) {
    var datec=new Date()
    var ustime=datec.toLocaleString("en-US", {hour12:false,timeZone: "America/New_York"})
    res.status(200).json({'Date':ustime});
    

    
});

Adminroute.route('/findcattuser').post(function(req, res) {
    Admin.find(
        { date:req.body.date,
        userid:req.body.userid,
        },
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Admin':success});
                }
                
             }
         }
    
      
    )
    

    
});











module.exports = Adminroute;
