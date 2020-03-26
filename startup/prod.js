const helmet = require('helmet');
// const compress = require('compress');
const compress = require('compression');

module.exports = function(app) {
  app.use(helmet());
  app.use(compress());
};
