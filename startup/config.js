const config = require('config');
module.exports = function() {
  if (!config.get('jwtPrivateKey')) {
    console.log('process.env : ', process.env.mode);
    throw new Error('FATAL ERROR : jwtPrivateKey is not defined');
    process.exit(1);
  }
};
