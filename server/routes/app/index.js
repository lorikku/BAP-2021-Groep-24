const express = require('express');
const route = express.Router();

//Import endpoint routes from other files
const residents = require('./residents');
const myResidents = require('./my-residents');
const interests = require('./interests');

//Add endpoint routes to main API route
route.use('/residents', residents);
route.use('/my-residents', myResidents);
route.use('/interests', interests);

//Export this route to use in server.js
module.exports = route;
