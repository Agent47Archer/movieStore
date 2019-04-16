const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator/check');

const router = express.Router();
const Registration = mongoose.model('Registration');
const MovieList = mongoose.model('movies');

router.get('/', (req, res) => {
    res.render('form', { title: 'Registration form' });
});

router.get('/registrations', (req, res) => {
    Registration.find()
      .then((registrations) => {
        res.render('index', { title: 'Listing registrations', registrations });
      })
      .catch(() => { res.send('Sorry! Something went wrong.'); });
  });

  router.get('/movies', (req, res) => {
    MovieList.find()
      .then((movies) => {
        res.render('moviesList', { title: 'Listing Movies', movies });
      })
      .catch(() => { res.send('Sorry! Something went wrong.'); });
  });
/*
  router.get('/movieDetails',(req,res) => {
    console.log('Inside The movie Details');
    MovieList.find().then((movie) => {
        res.render('movieList', (res.body))
    })
  });
*/
router.post('/', [
    body('name')
        .isLength({ min: 1 })
        .withMessage('Please enter a name'),
    body('email')
        .isLength({ min: 1 })
        .withMessage('Please enter an email'),
], (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const registration = new Registration(req.body);
        registration.save()
          .then(() => { res.send('Thank you for your registration!'); })
          .catch(() => { res.send('Sorry! Something went wrong.'); });
    } else {
        res.render('form', {
            title: 'Registration form',
            errors: errors.array(),
            data: req.body,
        });
    }
});
module.exports = router;