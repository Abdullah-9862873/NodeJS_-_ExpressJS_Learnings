const express = require('express');

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello world</h1>");
})

app.get("/contact", function(req, res){
    res.send("Contact me at ag9862873@gmail.com");
})

app.get("/about", function(req, res){
    res.send("Hello my name is Abdullah and I am a developer of Web 2.0 and I am becoming a meta developer");
})

app.listen("3000", function(){
    console.log("Listening to the port 3000");
})