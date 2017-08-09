var models = require('../models');

var orders = {};

orders.get_values = function(req, res){

  console.log("Here in controller");

  console.log("models models", models);

  models.dpvHstSalesTotals.findAll().then(function (sale) {

  	console.log("Here data for orders ---", sale);

  	res.send(sale);

  }).catch(function (err) {
  
    console.log("Here err for orders ---", err)
  
  });

};

module.exports = orders ;
