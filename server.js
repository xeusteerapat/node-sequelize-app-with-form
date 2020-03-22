const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./models');
const gigsRouter = require('./routes/gigs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './views');
app.set('view engine', 'ejs');

// Gigs routes
app.use('/gigs', gigsRouter);
app.get('/', (req, res) => {
  res.render('index');
});

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server listening on port 5000');
  });
});
