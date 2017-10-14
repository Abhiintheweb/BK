var express = require('express');
var router = express.Router();
var controller = require("../controllers"); 

// Zone wise sale
router.get('/get_all_zone_sale', controller.zone_sales.get_all_zone_sale);
router.get('/get_zone_wise_sale', controller.zone_sales.get_zone_wise_sale);
router.get('/get_hourly_sales', controller.zone_sales.get_hourly_sales);//http://localhost:3014/get_hourly_sales?date=2014-12-10
router.get('/get_hourly_sales_detail', controller.zone_sales.get_hourly_sales_detail);//http://localhost:3014/get_hourly_sales_detail?date=2014-12-10&slot_no=10
router.get('/order_details', controller.zone_sales.order_details);//http://localhost:3014/order_details?check_number=20014
// store wise sale

module.exports = router;