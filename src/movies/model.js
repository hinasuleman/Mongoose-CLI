const mongoose = require ('mongoose');

const movieModel = new mongoose.Schema ({
    title: {
        type: String,
        unique: true,
        require: true
    },
    actor:{
        type: String,
        default: "actor not specified"
    },
    director: {
        type: String,
        default: "director not specified"
    },
    rating: {
        type: Number,
        default: "00"
    }
});

const MovieCollection = mongoose.model("Mongoose Movie", movieModel);

module.exports = MovieCollection;