var express = require("express");
var router = express.Router();
var  bodyParser  = require("body-parser");


var MongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost:27017/vipadmin';

router.post("/",function (req,res) {
    MongoClient.connect(dbUrl,function (error,db) {
        var arry={};
        if (req.body.phone){
            arry.name=req.body.phone;
        }
       db.db("vipAdmin").collection("vipList").find(arry).toArray(function (error,result) {
               res.header("Access-Control-Allow-Origin", "http://localhost:63342");
               res.json({code:0,data:result});
           })
    })
});
module.exports=router;