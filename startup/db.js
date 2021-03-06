const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config');
module.exports = function() {
  mongoose.connect(config.get('db')).then(() => {
    winston.info(`connected to ${config.get('db')}....`);
  });

  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useUnifiedTopology', true);
};
