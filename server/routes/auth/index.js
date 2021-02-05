const express = require('express');
const route = express.Router();

route.use('/staff', async (req, res) => {
  res.status(403).json({
    message: 'This API endpoint is still under development',
  });
});

//Export this route to use in server.js
module.exports = route;
