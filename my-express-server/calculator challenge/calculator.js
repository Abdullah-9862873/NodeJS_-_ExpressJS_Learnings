// body-parser helps to parse the body of HTTP request and urlencoded gives us the form data

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    var number1 = Number(req.body.num1);
    var number2 = Number(req.body.num2);
    var result = number1 + number2;
    res.send("The result for the caluclator is: " + result);
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = (weight)/(height * height);

    res.send("Your BMI is: " + bmi);
})

app.listen("3000", function(){
    console.log("Listening to the port 3000");
})
