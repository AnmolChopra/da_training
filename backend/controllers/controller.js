let express = require('express');
let bodyparser = require('body-parser');
// let cors = require('cors');
let admscm = require('../models/admin');
let topic = require('../models/topic');
let chapter2 =require('../models/chapter2');
let teacher = require('../models/teacher');
let ques = require('../models/question');
let ques2 = require('../models/question2');
let mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/school",(err)=>{
    if (err) throw err
    else{
        console.log("Connected To Database School")
    }
})

// multer starts
let multer = require('multer');
let DIR = './attach/';
let storage = multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,DIR);
    },
    filename:function(req,file,cb){
        var datetimestamp = Date.now();
        cb(null,file.filename+'-'+datetimestamp+'.'+file.originalname.split('.')[file.originalname.split('.').length-1])
    }
});

let upload = multer({storage:storage}).single('upload');
 // end of multer

module.exports={
    //Admin Login
    adminLog:function(req,res){
        var username = req.body.username;
        var password = req.body.password;
    admscm.findOne({'username':username,'password':password},(err,data)=>{
            if(err){}
            else if(!data){
                res.json({'err':1,'msg':'Invalid Credentials'})
            }
            else{
                res.json({'err':0,'msg':'Login Successful','username':username})
            }
        })
    },

//                                   Teacher Login
    TechLog:function(req,res){
        var username = req.body.username;
        var password = req.body.password;
        teacher.findOne({'username':username,'password':password},(err,data)=>{
            if(err){}
            else if(!data){
                res.json({'err':1,'msg':'Invalid Credentials'})
            }
            else{
                res.json({'err':0,'msg':'Login Successful','username':username})
            }
        })
    },
                                      //Add Teacher
    addteacher:function(req,res){
        var username = req.body.username;
        var password =req.body.password;
        let ins = new teacher({'username':username,'password':password});
        ins.save((err)=>{
            if (err){}
            else{
                res.json({'err':0,'msg':'Teacher Created successfully'});
            }
        })
    },
         //Add Topic Chapter 1
    addtop:function(req,res){
        upload(req,res,(err)=>{
            if(err){}
            else{
                var topicname = req.body.topicname;
                var fname = req.file.filename;
                let ins = new topic({'topicname':topicname,'upload':fname});
                ins.save((err)=>{
                    if(err){}
                    else{
                        res.json({'err':0,'msg':'Topic Added'})
                    }
                })
            }
        })
    },
    
//                Fetch All Data Chapter1    
    fetchAll:function(req,res){
 topic.find({},(err,data)=>{
            if(err){}
            else {
                res.json({'fetch':data});
            }
        })
    },
//                Fetch Topic Chapter1
    fetchTopic:function(req,res){
       
        topic.aggregate([            
            {
                $lookup:{
                    from:'questions',
                    localField:'topicname',
                    foreignField:'topicname',
                    as:'values'
                }
            },
            {
                $unwind: '$values'
             },
             {
                 $project:{
                     "topicname":1,
                     "upload":1,
                     "values.question":1,
                     "values.op1":1,
                     "values.op2":1,
                     "values.op3":1,
                     "values.op4":1,
                     "values.correctop":1,
                 }
             }
        ],(err,data)=>{
            if(err){}
            else{
                res.json({'fetch':data});
                console.log(data)
            }
        })
       
    },
//                        Add Quiz Chapter1
    addquuiz:function(req,res){
        var question = req.body.question;
        var op1=req.body.op1;
        var op2=req.body.op2;
        var op3=req.body.op3;
        var op4=req.body.op4;
        var correctop=req.body.correctop;
        var topicname = req.body.topicname;

        let ins = new ques({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
        ins.save((err)=>{
            if (err) {}
            else{
                res.json({'err':0,'msg':'quiz added'});
            }
        })
    },


    //                                  Chapter2 Starts


     addtop2:function(req,res){
        upload(req,res,(err)=>{
            if(err){}
            else{
                var topicname = req.body.topicname;
                var fname = req.file.filename;
                let ins = new chapter2({'topicname':topicname,'upload':fname});
                ins.save((err)=>{
                    if(err){}
                    else{
                        res.json({'err':0,'msg':'Topic Added'})
                    }
                })
            }
        })
    },
    
//                Fetch All Data Chapter2    
    fetchAll2:function(req,res){
 chapter2.find({},(err,data)=>{
            if(err){}
            else {
                res.json({'fetch':data});
            }
        })
    },
//                Fetch Topic Chapter2
    fetchTopic2:function(req,res){
       
        chapter2.aggregate([            
            {
                $lookup:{
                    from:'question2',
                    localField:'topicname',
                    foreignField:'topicname',
                    as:'values'
                }
            },
            {
                $unwind: '$values'
             },
             {
                 $project:{
                     "topicname":1,
                     "upload":1,
                     "values.question":1,
                     "values.op1":1,
                     "values.op2":1,
                     "values.op3":1,
                     "values.op4":1,
                     "values.correctop":1,
                 }
             }
        ],(err,data)=>{
            if(err){}
            else{
                res.json({'fetch':data});
                console.log(data)
            }
        })
       
    },
//                        Add Quiz Chapter2
    addquuiz2:function(req,res){
        var question = req.body.question;
        var op1=req.body.op1;
        var op2=req.body.op2;
        var op3=req.body.op3;
        var op4=req.body.op4;
        var correctop=req.body.correctop;
        var topicname = req.body.topicname;

        let ins = new ques2({'question':question,'op1':op1,'op2':op2,'op3':op3,'op4':op4,'correctop':correctop,'topicname':topicname});
        ins.save((err)=>{
            if (err) {}
            else{
                res.json({'err':0,'msg':'quiz added'});
            }
        })
    },

}