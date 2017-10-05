var express = require('express');
var router = express.Router();
var controller = require("../controllers"); 

// Zone wise sale
router.get('/get_all_zone_sale', controller.zone_sales.get_all_zone_sale);
router.get('/get_zone_wise_sale', controller.zone_sales.get_zone_wise_sale);

// store wise sale

module.exports = router;