const mongoose = require('mongoose');

const movieListSchema = new mongoose.Schema({
    title: {
    type: String,
    trim: true,
  },
    year:{
        type:Number,
        trim:true,
    },
    imdb:{
        rating:String
    }
});

module.exports = mongoose.model('movies',movieListSchema);

//{"_id":"5b107bec1d2952d0da9046e0","title":"Once Upon a Time in the West","year":1968,"rated":"PG-13","runtime":175,"countries":["Italy","USA","Spain"],"genres":["Western"],"director":"Sergio Leone","writers":["Sergio Donati","Sergio Leone","Dario Argento","Bernardo Bertolucci","Sergio Leone"],"actors":["Claudia Cardinale","Henry Fonda","Jason Robards","Charles Bronson"],"plot":"Epic story of a mysterious stranger with a harmonica who joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.","poster":"http://ia.media-imdb.com/images/M/MV5BMTEyODQzNDkzNjVeQTJeQWpwZ15BbWU4MDgyODk1NDEx._V1_SX300.jpg","imdb":{"id":"tt0064116","rating":8.6,"votes":201283},"tomato":{"meter":98,"image":"certified","rating":9,"reviews":54,"fresh":53,"consensus":"A landmark Sergio Leone spaghetti western masterpiece featuring a classic Morricone score.","userMeter":95,"userRating":4.3,"userReviews":64006},"metacritic":80,"awards":{"wins":4,"nominations":5,"text":"4 wins & 5 nominations."},"type":"movie"}