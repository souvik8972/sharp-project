const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();
const controllers=require("../controllers/main")

router.get('/',controllers.shop);

module.exports = router;
