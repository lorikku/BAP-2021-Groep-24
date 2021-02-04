const express = require('express');
const { ObjectId } = require('mongodb');
const route = express.Router();

const statusMessages = require('../statusMessages');

/* /auth/staff/my-residents */
route.get('/my-residents', async (req, res) => {
  let { name, sorting, floor } = req.query;

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

  // If floor is in boundaries (0 - 3), use it to query, otherwise ignore floor
  if (floor) {
    if (-1 < floor && floor < 4) {
      query.floor = floor;
    }
  }

  /* Sorting the results */
  switch (sorting) {
    case 'spotlight':
      sorting = {
        'myResidents.spotlightTimestamp': -1,
      };
      break;

    case 'new-old':
      sorting = {
        _id: -1,
      };
      break;

    case 'old-new':
      sorting = {
        _id: 1,
      };
      break;

    default:
      sorting = {
        'myResidents.spotlightTimestamp': -1,
      };
      break;
  }

  let myResidents = [];
  //Fetch interests from app database and turn into array. If an error occured in the query, send 500 with error message and return
  try {
    result = await req.app.mongodb
      .db('auth')
      .collection('staff')
      .aggregate([
        { $match: { _id: ObjectId('601acc5f47326585f23b2ade') } },
        { $unwind: '$myResidents' },
        { $sort: sorting },
        { $group: { _id: '$_id', myResidents: { $push: '$myResidents' } } },
      ])
      .next();

      if(result) myResidents = result.myResidents;
  } catch (err) {
    console.log(err);
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  //Send found interests, else 404
  if (myResidents.length === 0) {
    res.status(404).json({
      message:
        'My residents not found, or something was wrong with the databse.',
    });
  } else {
    res.status(200).json({
      message: 'My residents found!',
      myResidents
    });
  }
});

//Export this route to use in index.js
module.exports = route;
