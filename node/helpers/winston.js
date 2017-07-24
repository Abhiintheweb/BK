var winston = require('winston');
//require('winston-papertrail').Papertrail;
//var config = require('../alatheia_jsons').alatheia;
//var winston_config = config[config.env]['winston'];
var logger = new winston.Logger({
  transports: [
    //new winston.transports.Papertrail(winston_config)
    //new winston.transports.Papertrail()
  ]
});
//module.exports.winston = winston;
module.exports.logger = logger;