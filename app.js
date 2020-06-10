var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var Truck = require('./models/trucks');
var seedDB = require("./seeds");
var Comment = require("./models/comment");


//seedDB();
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/trucker_2020", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");




/*Truck.create(
    {
        name: "Taste of Soul",
        image: "https://rh-vendoradmin.s3.amazonaws.com/trucks/original/3363/500f54fb-d050-4226-a66f-2ad346204482.jpeg",
        foodType: "Chinese"
    }, function(err, truck){
        if(err){
            console.log(err);
        } else {
            console.log("New Truck: ");
            console.log(truck);
        }
    }
);
*/

/*
RESTFUL ROUTES

name       url          verb       description
============================================
INDEX      /trucks      GET      Display a list of all trucks
NEW        /trucks/new  GET      Displays a form to create a new truck
CREATE     /trucks      POST     Add a new truck to the DB
SHOW       /trucks/:id  GET      Shows info about one truck

*/



app.get("/", function (req, res) {
    res.render("landing");
});


//Show all trucks from DB
app.get("/trucks", function (req, res) {
    //Get all trucks from DB
    Truck.find({}, function(err, trucks){
        if(err){
            console.log(err);
        } else {
            res.render("index", {trucks: trucks});
        }
    });
   /* res.render("trucks", {
        trucks: trucks
    });*/
});

//Add new truck to DB
app.post("/trucks", function (req, res) {
    //get data from form and add to trucks array
    var name = req.body.name;
    var image = req.body.image;
    var foodType = req.body.foodtype;
    var description = req.body.description;
    var newTruck = {
        name: name,
        image: image,
        foodType: foodType,
        description: description
    };
    //Create a new Truck and save to DB
    Truck.create(newTruck, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
           //redirect back to trucks page
           res.redirect("/trucks");
        }
    })

});

//Show form to create a new truck for DB
app.get("/trucks/new", function (req, res) {
    res.render("new");
});

//Show more info about one truck
app.get("/trucks/:id", function(req, res){
    //find the truck with provided ID
    Truck.findById(req.params.id).populate("comments").exec(function(err, foundTruck){
        if(err){
            console.log(err);
        } else {
            //render show template for that truck
            res.render('show', {truck: foundTruck});
        }
    });
    
});


app.listen(3000, function () {
    console.log('Trucker2020 App Server is listening.')
});