const express = require('express');
const route = express.Router();

//Import endpoint routes from other files
const residents = require('./residents');
const interests = require('./interests');
// const dependencies = require('./dependencies');
// const categories = require('./categories');

//Add endpoint routes to main API route
route.use('/residents', residents);
route.use('/interests', interests);
// route.use('/dependencies', dependencies);
// route.use('/categories', categories);

//Export this route to use in server.js
module.exports = route;
