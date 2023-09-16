const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const err=require("./controllers/err")
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData);
app.use(shopRoutes);

app.use(err.geterr);

app.listen(3000);
