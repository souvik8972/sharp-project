const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];
const controllers=require("../controllers/main")

// /admin/add-product => GET
router.get('/add-product',controllers.admin );

// /admin/add-product => POST
router.post('/add-product',controllers.addProduct);

exports.routes = router;
exports.products = products;
module.exports=router