const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();  //app is an instance of express.js
const port = process.env.PORT || 5000;

//50K view
//1 Middleware 
//2 Routes
//3 Start the server

//1
//app.use(morgan('dev'));     //for logging
app.use(bodyParser.json()); //for posts?

//2
app.use('/quotes', require('./routes/quotes'));

//3
app.listen(port);
console.log(`Server is listening at port ${port}`);
//console.log('before file mount');
//var json_data = require('./mockdata/auto.leads.json');
//console.log('after file mount');
//console.log(json_data);

