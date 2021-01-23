const express = require('express');
const route = express.Router();

route.use('/staff', () => {
    //Add staff auth route here
});

route.use('/residents', () => {
    //Add residents auth route here
});

//Export this route to use in server.js
module.exports = route;
