var zone_sales = {};

// All sales based on filter and like day/week/month/year
zone_sales.get_all_zone_sale = function(req, res){
	// req.query.company_id
	// req.query.user_id
	// req.query.filter_type
};

// zone wise sales based on filter and like day/week/month/year
zone_sales.get_zone_wise_sale = function(req,res){
	// req.query.company_id
	// req.query.user_id
	// req.query.filter_type
	// req.query.zone_id
};

// store wise sales
sales.get_store_wise_sale = function(req, res){
	// req.query.company_id
	// req.query.user_id
	// req.query.filter_type
	// req.query.zone_id
	// req.query.store_id
};

// store wise hourly sales
sales.get_store_wise_hourly_sale = function(req,res){
	// req.query.company_id
	// req.query.user_id
	// req.query.filter_type
	// req.query.zone_id
	// req.query.store_id
};

// store wise hourly sales
sales.get_store_wise_daypart_sale = function(req,res){
	// req.query.company_id
	// req.query.user_id
	// req.query.filter_type
	// req.query.zone_id
	// req.query.store_id
};

// store wise category sales
sales.get_store_wise_category_sale = function(req,res){
	// req.query.company_id
	// req.query.user_id
	// req.query.filter_type
	// req.query.zone_id
	// req.query.store_id
};

// store wise category order
sales.get_store_wise_order_sale = function(req,res){
	// req.query.company_id
	// req.query.user_id
	// req.query.filter_type
	// req.query.zone_id
	// req.query.store_id
};

// store wise hourly sales
sales.get_store_wise_hourly_sale = function(req,res){
	// req.query.company_id
	// req.query.user_id
	// req.query.filter_type
	// req.query.zone_id
	// req.query.store_id
};

module.exports = zone_sales ;
