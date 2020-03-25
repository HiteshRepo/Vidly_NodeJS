const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
  // process.on('uncaughtException', ex => {
  //   console.log('WE HAVE GOT AN EXCEPTION');
  //   winston.error(ex.message, ex);
  //   process.exit(1);
  // });

  // process.on('unhandledRejection', ex => {
  //   console.log('WE HAVE GOT AN UNHANDLED REJECTION');
  //   winston.error(ex.message, ex);
  //   process.exit(1);
  // });

  //winston.handleExceptions
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: 'uncaughtExceptions.log' })
  );

  process.on('unhandledRejection', ex => {
    throw ex;
  });

  winston.add(new winston.transports.File({ filename: 'logFile.log' }));
  // winston.add(
  //   new winston.transports.MongoDB({
  //     level: 'error',
  //     db:
  //       'mongodb+srv://Hitesh1103:mzlRpnSLJmtFHCss@practicecluster-7ie7c.mongodb.net/vidly?retryWrites=true&w=majority',
  //     collection: 'log'
  //   })
  // );
};
