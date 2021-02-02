const express = require('express');
const route = express.Router();

route.use('/staff', (req, res) => {
  res
    .status(403)
    .json({ message: 'Staff authentication API still under construction' });
});

//Export this route to use in server.js
module.exports = route;
