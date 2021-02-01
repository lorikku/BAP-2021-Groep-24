const express = require('express');
const { ObjectID } = require('mongodb');
const route = express.Router();

const statusMessages = require('../statusMessages');

/* /app/residents */
route.get('/', async (req, res) => {
  let { name, sorting, floor } = req.query;

  /* Setting the options (which data do we need?) */
  const options = {
    interests: 0,
  };

  /* Setting the query */
  const query = {};

  // Add name to db query if it was set in GET query, NAME CAN ALSO BE ROOM NUMBER! 'i' stands for case-insensitive
  if (name) {
    if (!isNaN(parseInt(name))) {
       // If name was a number -> treat as room number query 
      query.roomNr = new RegExp(name, 'i');
    } else {
      // Else, search on residential names
      query.name = new RegExp(name, 'i');
    }
  }

  // If floor is in boundaries, use it to query, otherwise ignore floor
  if (floor) {
    if (0 < floor && floor < 4) {
      query.floor = floor;
    }
  }

  /* Sorting the results */
  switch (sorting) {
    case 'new-old':
      sorting = {
        _id: 1,
      };
      break;

    case 'old-new':
      sorting = {
        _id: -1,
      };
      break;

    default:
      sorting = {
        _id: 1,
      };
      break;
  }

  let residents;
  //Fetch residents from app database and turn into array. If an error occured in the query, send 500 with error message and return
  try {
    residents = await req.app.mongodb
      .db('app')
      .collection('residents')
      .find(query, options)
      .sort(sorting)
      .toArray();
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  //Send found residents, else 404
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

/* /app/residents/:residentId */
route.get('/:residentId', async (req, res) => {
  const residentId = req.params.residentId;

  let _id;
  //Try converting residentId to an ObjectID for querying. If this fails => invalid id has been submitted.
  try {
    _id = ObjectID(residentId);
  } catch (err) {
    res
      .status(statusMessages.INVALID_OBJECTID.statusCode)
      .json({ message: statusMessages.INVALID_OBJECTID.message });
    return;
  }

  /* Setting the query */
  const query = {
    _id,
  };

  let resident;
  //Fetch resident from app database. If an error occured in the query, send 500 with error message and return
  try {
    resident = await req.app.mongodb
      .db('app')
      .collection('residents')
      .findOne(query);
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  //Send found resident, else 404
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
