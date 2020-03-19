const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const config = require('config');

if (!config.get('jwtPrivateKey')) {
  console.log('FATAL ERROR : jwtPrivateKey is not defined');
  process.exit(1);
}

mongoose
  .connect(
    'mongodb+srv://Hitesh1103:mzlRpnSLJmtFHCss@practicecluster-7ie7c.mongodb.net/vidly?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('connected to mongodb....');
  })
  .catch(err => {
    console.error('could not connect mongodb');
  });

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

app.use(express.json());

app.use('/api/genres', require('./routes/genres'));
app.use('/api/customers', require('./routes/customers'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/rentals', require('./routes/rentals'));
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
