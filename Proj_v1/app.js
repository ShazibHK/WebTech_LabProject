const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
// const https = require("https");

const app = express();

app.use(express.static("public"));   //static files

app.use(express.urlencoded({extended: true})); 

app.get("/",function(req,res){
 
    res.sendFile(__dirname + "/index.html");
 });

 app.get("/signup",function(req,res){
 
    res.sendFile(__dirname + "/signup.html");
 });

 app.get("/login",function(req,res){
 
    res.sendFile(__dirname + "/login.html");
 });

 app.get("/success",function(req,res){
 
   res.sendFile(__dirname + "/success.html");
});

app.get("/fail",function(req,res){
 
   res.sendFile(__dirname + "/fail.html");
});

app.post("/signup",function(req,res){
   // console.log(req.body);
    var cname = (req.body.cname);              
    var eid  =  (req.body.eid);
    var pass1 = (req.body.pass1);

    console.log(cname, eid, pass1);

    if(cname === "" || eid ==="" || pass1 === ""){
      res.redirect("/fail");
    }else{
      res.redirect("/success"); 
    }
  
}); 
 
app.listen(3000,function(){
    console.log("server is running on port 3000");
}); 
