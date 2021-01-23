const express = require('express');
const route = express.Router();

const residents = require('./residents');

route.use('/residents', residents);

//Export this route to use in server.js
module.exports = route;
