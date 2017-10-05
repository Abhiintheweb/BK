var cluster = require('cluster');
var logger = require('./helpers/winston').logger;
var numCPUs = require('os').cpus().length;
var config = require('./config/app_config');
var env = config["env"];

/*
var Sequelize=require("sequelize")
const sequelize = new Sequelize('ALOHAINSIGHT', 'i4t', 'Pass123#', {
  host: '223.31.64.6',
  dialect: 'mysql',
  port:1433,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});*/

if (cluster.isMaster) {

  logger.info("[ENV] [APP] " + env);
  // Fork workers. 
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  Object.keys(cluster.workers).forEach(function (id) {
    console.log("I am APP running with ID : " + cluster.workers[id].process.pid);
    logger.info("I am APP running with ID : " + cluster.workers[id].process.pid); //send to papertrailt too
  });
  cluster.on('exit', function (worker, code, signal) {
    console.log('APP worker ' + worker.process.pid + ' shall never be heard from again');
    logger.info('APP worker ' + worker.process.pid + ' shall never be heard from again'); //send to papertrailt too
  });

} else {

  var express = require('express');
  var routes = require('./routes');
  var bodyParser = require('body-parser');
  var app = express();

  app.use(bodyParser.json());

  app.use(routes);

  app.listen(3014);

};
