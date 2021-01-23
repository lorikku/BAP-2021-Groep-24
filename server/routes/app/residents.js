const express = require('express');
const route = express.Router();

route.get('/', async (req, res) => {
  const options = {
    //Hide _id (object id) in response
    projection: { _id: 0 },
  };

  //Fetch residents from app database and turn into array
  const residents = await req.app.mongodb
    .db('app')
    .collection('residents')
    .find(null, options)
    .toArray();

  //Send found residents, if found, as response
  if (residents.length === 0) {
    res.status(404).json({
      message: 'Residents not found, or something was wrong with the databse.',
    });
  } else {
    res.status(200).json({
      message: 'Residents found!',
      residents,
    });
  }
});

route.get('/:residentId', async (req, res) => {
  //Query to use for searching
  const query = {
    id: req.params.residentId,
  };

  const options = {
    //Hide _id (object id) in response
    projection: { _id: 0 },
  };

  //Fetch resident from app database and turn into object
  const resident = await req.app.mongodb
    .db('app')
    .collection('residents')
    .find(query, options)
    .next();

  //Send found resident, if found, as response
  if (resident) {
    res.status(200).json({
      message: 'Resident found!',
      resident,
    });
  } else {
    res.status(404).json({ message: 'Resident not found!' });
  }
});

//Export this route to use in index.js
module.exports = route;
