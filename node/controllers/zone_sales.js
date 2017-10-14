let models = require("../models");
const http_status = require('../helpers/http_status');
http_status_obj = new http_status();
var moment = require('moment');

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



zone_sales.get_hourly_sales = function(req,res){
	// req.query.company_id
	// req.query.user_id
	// req.query.filter_type
	// req.query.zone_id

	models.order.hourly_sales_data(req.query.date,function(err,data){
			if(err){
				http_status_obj.bad_request(res, err);
			}else{
				console.log(data)
				http_status_obj.ok(res, data);
			}

	});

};

zone_sales.get_hourly_sales_detail = function(req,res){
	// req.query.company_id
	// req.query.user_id
	// req.query.filter_type
	// req.query.zone_id

	models.order.hourly_sales_detail(req.query.date,req.query.slot_no,function(err,data){
			if(err){
				http_status_obj.bad_request(res, err);
			}else{
				console.log(data)
				http_status_obj.ok(res, data);
			}

	});

};

zone_sales.order_details = function(req,res){
	// req.query.company_id
	// req.query.user_id
	// req.query.filter_type
	// req.query.zone_id
	
		models.order.findAll( {
			  where: {
			    check_number:req.query.check_number,
				system_date: {
			        $between: [req.query.date,moment(req.query.date, "YYYY-MM-DD").add(1, 'days').format('YYYY-MM-DD')]
			    }
			  }
			}).then(function(data){
			if (data){
				http_status_obj.ok(res, data);
				 

			}else{
				http_status_obj.bad_request(res, {err:"No data found"});
			}
			}).catch(function(err){
				http_status_obj.bad_request(res, err);
			})

	// models.order.hourly_sales_detail(req.query.check_number,function(err,data){
	// 		if(err){

	// 			models.order.find({check_number:2020}).then(function(data){

	// 			}).catch(function(err){


	// 			})
	// 			// http_status_obj.bad_request(res, err);
	// 		}else{
	// 			console.log(data)
	// 			http_status_obj.ok(res, data);
	// 		}

	// });

};

module.exports = zone_sales ;
