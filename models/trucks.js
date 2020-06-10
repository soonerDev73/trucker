var mongoose = require('mongoose');

var truckSchema = new mongoose.Schema({
    name: String,
    image: String,
    foodType: String,
    description: String,
    userType: String,
    location: String,
    date: String,
    time: String,
    menu: Array,
    announcement: String,
    ownerFirstName: String,
    ownerLastName: String,
    password: String,
    accountType: String,
    approved: Boolean,
    facebook: String,
    twitter: String,
    instagram: String,
    rating: Number,
    restricted: Boolean,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

var Truck = mongoose.model("Truck", truckSchema);

module.exports = Truck;