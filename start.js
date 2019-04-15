require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

require('./registration');
require('./movieList');
const app = require('./app');
const port = 3000;
const server = app.listen(port, ()=> {
console.log(`Express Server is Running on port ${port} with Server ${server.address().port}`);
});