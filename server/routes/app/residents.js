const express = require('express');
const { ObjectID } = require('mongodb');
const route = express.Router();

const statusMessages = require('../statusMessages');

/* -- ALL RESIDENTS QUERIES -- */
/* /app/residents?name&sorting&floor */
route.get('/', async (req, res) => {

  let { name, sorting, floor } = req.query;

  /* Setting the options (which data do we need?) */
  const options = {
    projection: {
      interests: 0,
      contacts: 0,
    },
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

/* -- SINGLE RESIDENTS QUERIES -- */

const getResidentData = async (req, res, projection) => {
  const residentId = req.params.residentId;

  let _id;
  //Try converting residentId to an ObjectID for querying. If this fails => invalid id has been submitted.
  try {
    _id = ObjectID(residentId);
  } catch (err) {
    res
      .status(statusMessages.INVALID_OBJECTID.statusCode)
      .json({ message: statusMessages.INVALID_OBJECTID.message });
    return 'ERROR_ID';
  }

  /* Setting the options */
  const options = {
    projection,
  };

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
      .findOne(query, options);
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  //Send found resident, else null
  if (resident) {
    return resident;
  } else {
    return null;
  }
};

/* -- GET RESIDENT BY ID -- */
/* /app/residents/:residentId */
route.get('/:residentId', async (req, res) => {
  const resident = await getResidentData(req, res, {
    interests: false,
    contacts: false,
  });
  console.log('fetched');

  //If resident ID error occured => response has already been sent => return function
  if (resident === 'ERROR_ID') return;

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

/* -- GET RESIDENT INTERESTS BY RESIDENT ID -- */
/* /app/residents/:residentId/interests */
route.get('/:residentId/interests', async (req, res) => {
  const resident = await getResidentData(req, res, { interests: 1 });

  //If resident was not found, send 404
  if (!resident) {
    res.status(404).json({ message: 'Resident not found!' });
    return;
  }

  //If resident ID error occured => response has already been sent => return function
  if (resident === 'ERROR_ID') return;

  //Send found resident's interests, else 404
  if (resident.interests) {
    res.status(200).json({
      message: 'Resident interests found!',
      interest: resident.interests,
    });
  } else {
    res.status(404).json({ message: 'Resident interests not found!' });
  }
});

/* -- GET RESIDENT CONTACTS BY RESIDENT ID -- */
/* /app/residents/:residentId/contacts */
route.get('/:residentId/contacts', async (req, res) => {
  const resident = await getResidentData(req, res, { contacts: 1 });

  //If resident was not found, send 404
  if (!resident) {
    res.status(404).json({ message: 'Resident not found!' });
    return;
  }

  //If resident ID error occured => response has already been sent => return function
  if (resident === 'ERROR_ID') return;

  //Send found resident's contacts, else 404
  if (resident.contacts) {
    res.status(200).json({
      message: 'Resident contacts found!',
      contacts: resident.contacts,
    });
  } else {
    res.status(404).json({ message: 'Resident contacts not found!' });
  }
});

//Export this route to use in index.js
module.exports = route;
