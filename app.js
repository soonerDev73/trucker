var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/trucks", function(req, res){
    var trucks = [
        {name: "Big Truck Tacos", image: "https://i.pinimg.com/564x/71/c9/57/71c95762866c0db9e54f0833ecc9f412.jpg", foodType:"Mexican"},
        {name: "Taste of Soul", image: "https://rh-vendoradmin.s3.amazonaws.com/trucks/original/3363/500f54fb-d050-4226-a66f-2ad346204482.jpeg" , foodType:"Chinese"},
        {name: "Fiesta House", image: "https://previews.123rf.com/images/yustus/yustus1802/yustus180200017/95666921-flat-design-vector-cartoon-colorful-illustration-of-food-truck-traditional-mexican-street-cuisine-au.jpg", foodType:"Mexican"}
    ]
    res.render("trucks", {trucks: trucks});
});

app.listen(3000, function(){
    console.log('Trucker2020 App Server is listening.')
});