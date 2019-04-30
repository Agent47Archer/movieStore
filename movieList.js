const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const movieListSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    year: {
        type: Number,
        trim: true,
    },
    imdb: {
        rating: String
    }
});

const movieDetails = new Schema({
    title: String,
    year: Number,
    writer: [{
        type: String,
        trim: true
    }]
});
function callBackInAct (){
    console.log('Callback was called');
}

movieDetails.methods.HelloWorld = function () {
    var descr = this.title ? "This movie " + this.title + " From year " + this.year : 'This movie Does not exists';
    console.log("Tony Stark has a Heart");
    console.log(descr);
}
/*
movieDetails.find(function (err,title){
    if(err) return console.error(err);
    console.log(title);
}); 
*/


module.exports = mongoose.model('movieD', movieDetails);
module.exports = mongoose.model('movies', movieListSchema);