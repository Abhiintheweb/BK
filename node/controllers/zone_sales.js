let models = require("../models");
const http_status = require('../helpers/http_status');
http_status_obj = new http_status();

let zone_sales = {};

// All sales based on filter and like day/week/month/year
zone_sales.get_all_zone_sale = function(req, res){
	// req.query.company_id
	// req.query.user_id
	// req.query.filter_type
	let company_id = req.query.company_id ;
	let user_id = req.query.user_id ;
	let filter_type = req.query.filter_type ;
	//let date = req.query.date ;
	let date = "2014-10-25 04:01:38.000000" ;

	models.order.get_orders_all_zone(company_id, user_id, filter_type, date,
		function(err,data){
			if(err){
				http_status_obj.bad_request(res, err);
			}else{
				http_status_obj.ok(res, data);
			}

	});

};

// zone wise sales based on filter and like day/week/month/year
zone_sales.get_zone_wise_sale = function(req,res){
	// req.query.company_id
	// req.query.user_id
	// req.query.filter_type
	// req.query.zone_id
};

module.exports = zone_sales ;
