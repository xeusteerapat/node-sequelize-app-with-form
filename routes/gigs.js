const express = require('express');
const db = require('../models');
const router = express.Router();

// Get gigs list
router.get('/', (req, res) => {
  db.gigs
    .findAll()
    .then(gigs => res.render('gigs', { gigs }))
    .catch(err => {
      console.log(err);
    });
});

// add gig via form data
router.get('/add-gig', (req, res) => res.render('add-gig'));

// Add a gig
router.post('/add-gig', (req, res) => {
  let { title, technologies, budget, description, contactEmail } = req.body;

  // regex make lower case and remove space after comma
  technologies = technologies.toLowerCase().replace(/, /g, ',');
  db.gigs
    .create({ title, technologies, budget, description, contactEmail })
    .then(gigs => {
      res.redirect('/gigs');
    })
    .catch(err => console.log(err));
});

module.exports = router;
