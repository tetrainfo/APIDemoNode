//1.	Create a method/endpoint to return a collection of all list items
//      get/quotes?
//2.	Create a method/endpoint to retrieve item detail by ID
//      get/quotes/00420?
//3.	Create a method/endpoint to return a collection of all list items filtering on consumer’s state value
//      get/quotes?state="CA"
//4.	Create a method/endpoint to return a collection of all list items filtering on vehicle’s make value
//      get/quotes?make="CHEV"    
//5.	Create a method/endpoint to return a collection of all list items filtering on former insurer
//      get/quotes?former_insurer="AAA"


const express = require('express');
const router = require('express-promise-router')();

const QuotesController = require('../controllers/quotes');

router.route('/')
    .get(QuotesController.list);

router.route('/:id')
    .get(QuotesController.findById);

module.exports = router;

