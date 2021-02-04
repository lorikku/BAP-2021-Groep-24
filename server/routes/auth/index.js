const express = require('express');
const route = express.Router();

//Import endpoint routes from other files
const staff = require('./staff');

route.use('/staff', staff);

//Export this route to use in server.js
module.exports = route;
