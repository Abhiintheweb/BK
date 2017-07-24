var express = require('express');
var router = express.Router();
var controller = require("../controllers"); 

router.get('/get_order', controller.orders.get_values);

module.exports = router;