const yargs = require('yargs');
const mongoose = require('mongoose');
const {createMovie} = require ('./movies/function');
require('./db/connection');
const MovieCollection = require('./movies/model');

async function app (yargsInput) {
    if (yargsInput.create) {
        // code to add a movie goes here
        const movieObject = {title: yargsInput.title, actor: yargsInput.actor, director:yargsInput.director};
        const newMovie = await createMovie(movieObject);
        console.log (newMovie)
    } else if (yargsInput.read) {
        //code to list all movies goes here
        const readMovie = await MovieCollection.find ({})
        console.log (readMovie)
    } else if (yargsInput.updateActor) {
        //code to update actor goes here
        const updatedActor = await MovieCollection.updateOne({title:yargsInput.title}, {actor:yargsInput.actor})
        console.log (updatedActor)
    } else if (yargsInput.updateDirector) {
        //code to update director goes here
        
    } else if (yargsInput.delete) {
        //code to delete a movie goes here
        const deletedMovie = await MovieCollection.deleteOne ({title:yargsInput.title}) 
        console.log (deletedMovie)
    } else {
        console.log("Command not recognised")
    };
    await mongoose.disconnect();
};

app(yargs.argv);


    
    

    
