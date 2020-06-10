var mongoose = require('mongoose');
var Truck = require('./models/trucks');
var Comment = require("./models/comment");


var trucks = [
{
},
{
    name: "Big Truck Tacos",
    image: "https://i.pinimg.com/564x/71/c9/57/71c95762866c0db9e54f0833ecc9f412.jpg",
    foodType: "Mexican"
},
{
    name: "Taste of Soul",
    image: "https://rh-vendoradmin.s3.amazonaws.com/trucks/original/3363/500f54fb-d050-4226-a66f-2ad346204482.jpeg",
    foodType: "Chinese"
},
{
    name: "Fiesta House",
    image: "https://previews.123rf.com/images/yustus/yustus1802/yustus180200017/95666921-flat-design-vector-cartoon-colorful-illustration-of-food-truck-traditional-mexican-street-cuisine-au.jpg",
    foodType: "Mexican"
},
{
    name: "Big Truck Tacos",
    image: "https://i.pinimg.com/564x/71/c9/57/71c95762866c0db9e54f0833ecc9f412.jpg",
    foodType: "Mexican"
},
{
    name: "Taste of Soul",
    image: "https://rh-vendoradmin.s3.amazonaws.com/trucks/original/3363/500f54fb-d050-4226-a66f-2ad346204482.jpeg",
    foodType: "Chinese"
},
{
    name: "Fiesta House",
    image: "https://previews.123rf.com/images/yustus/yustus1802/yustus180200017/95666921-flat-design-vector-cartoon-colorful-illustration-of-food-truck-traditional-mexican-street-cuisine-au.jpg",
    foodType: "Mexican"
}
];

var data = [
    {
        name: "Big Truck Tacos",
        image: "https://i.pinimg.com/564x/71/c9/57/71c95762866c0db9e54f0833ecc9f412.jpg",
        foodType: "Mexican",
        description: "OKC's best tacos at a location near you!",
        userType: "truckOwner",
        location: String,
        date: String,
        time: String,
                    menu: Array,
        announcement: String,
        ownerFirstName: "Bill",
        ownerLastName: "Baynor",
        password: String,
        accountType: String,
        approved: true,
        facebook: String,
        twitter: String,
        instagram: String,
        rating: 4,
        restricted: false
    },
    {
        name: "Taste of Soul",
        image: "https://rh-vendoradmin.s3.amazonaws.com/trucks/original/3363/500f54fb-d050-4226-a66f-2ad346204482.jpeg",
        foodType: "Chinese",
        description: "Chinese food for your soul.",
        userType: "truckOwner",
        location: String,
        date: String,
        time: String,
                    menu: Array,
        announcement: String,
        ownerFirstName: "Jayson",
        ownerLastName: "Regis",
        password: String,
        accountType: String,
        approved: true,
        facebook: String,
        twitter: String,
        instagram: String,
        rating: 4.2,
        restricted: false
    },
    {
        name: "Fiesta House",
        image: "https://previews.123rf.com/images/yustus/yustus1802/yustus180200017/95666921-flat-design-vector-cartoon-colorful-illustration-of-food-truck-traditional-mexican-street-cuisine-au.jpg",
        foodType: "Mexican",
        description: "Join us for a fiesta today.",
        userType: "truckOwner",
        location: String,
        date: String,
        time: String,
                    menu: Array,
        announcement: String,
        ownerFirstName: "David",
        ownerLastName: "Smith",
        password: String,
        accountType: String,
        approved: true,
        facebook: String,
        twitter: String,
        instagram: String,
        rating: 3.8,
        restricted: false
    },
    {
        name: "Barbecue Bill's",
        image: "https://cdn.vox-cdn.com/thumbor/VXvfyRo6Z2XlOUcCOfTd4mPZhbA=/0x75:600x525/920x613/filters:focal(0x75:600x525):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/46170438/blacksbarbecue.0.0.jpg",
        foodType: "Barbecue",
        description: "Voted best barbecue in OKC 5 years and counting.",
        userType: "truckOwner",
        location: String,
        date: String,
        time: String,
                    menu: Array,
        announcement: String,
        ownerFirstName: "William",
        ownerLastName: "Charles",
        password: String,
        accountType: String,
        approved: true,
        facebook: String,
        twitter: String,
        instagram: String,
        rating: 4.6,
        restricted: false
    }
];


function seedDB(){
    //Remove all trucks from the DB
    Truck.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
        console.log("removed trucks");
         // add a few trucks to the DB
        data.forEach(function(seed){
                Truck.create(seed, function(err, data){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a truck");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great.",
                                author: "Homer"
                            }, function (err, comment){
                                data.comments.push(comment);
                                data.save();
                                console.log("created a new comment");
                            }
                        );
                    }
                });
         });
        };
    });
    
   
    // add some meta data 
};


module.exports = seedDB;