const express = require('express');
const route = express.Router();

const statusMessages = require('../statusMessages');
const {
  convertToObjectId,
  convertToRegExp,
  stopExecution,
} = require('../util');

/* -------------- GET QUERIES -------------- */

/* /app/residents?name&sorting&floor */
route.get('/', async (req, res) => {
  let { name, sorting, floor } = req.query;

  /* Setting the options (which data do we need?) */
  const options = {
    projection: {
      interests: false,
      contacts: false,
    },
  };

  /* Setting the query */
  const query = {};

  // Add name to db query if it was set in GET query, NAME CAN ALSO BE ROOM NUMBER! 'i' stands for case-insensitive
  if (name) {
    if (!isNaN(parseInt(name))) {
      // If name was a number -> treat as room number query
      query.roomNr = convertToRegExp(name, 'i', res);
    } else {
      // Else, search on residential names
      query.name = convertToRegExp(name, 'i', res);
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
        spotlightTimestamp: -1,
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
        spotlightTimestamp: -1,
      };
      break;
  }

  let residents = [];
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
  const _id = convertToObjectId(residentId, res);

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
  return resident;
};

/* -- GET RESIDENT BY ID -- */
/* /app/residents/:residentId */
route.get('/:residentId', async (req, res) => {
  const resident = await getResidentData(req, res, {
    interests: false,
    contacts: false,
  });

  //Send found resident
  if (resident) {
    res.status(200).json({
      message: 'Resident found!',
      resident,
    });
  } else {
    res.status(404).json({ message: 'Resident not found!' });
    return;
  }
});

/* -- GET RESIDENT INTERESTS BY RESIDENT ID -- */
/* /app/residents/:residentId/interests */
route.get('/:residentId/interests', async (req, res) => {
  const resident = await getResidentData(req, res, { interests: true });

  if (!resident) {
    res.status(404).json({ message: 'Resident not found!' });
    return;
  }

  //Send found resident's interests, else 404
  if (resident.interests && resident.interests.length > 0) {
    res.status(200).json({
      message: 'Resident interests found!',
      interests: resident.interests,
    });
  } else {
    res.status(404).json({ message: 'Resident interests not found!' });
  }
});

/* -- GET RESIDENT CONTACTS BY RESIDENT ID -- */
/* /app/residents/:residentId/contacts */
route.get('/:residentId/contacts', async (req, res) => {
  const resident = await getResidentData(req, res, { contacts: true });

  if (!resident) {
    res.status(404).json({ message: 'Resident not found!' });
    return;
  }

  //Send found resident's contacts, else 404
  if (resident.contacts && resident.contacts.length > 0) {
    res.status(200).json({
      message: 'Resident contacts found!',
      contacts: resident.contacts,
    });
  } else {
    res.status(404).json({ message: 'Resident contacts not found!' });
  }
});

/* -------------- PUT QUERIES -------------- */

route.put('/:residentId', async (req, res) => {
  const query = {
    _id: convertToObjectId(req.params.residentId, res),
  };

  const update = {
    $set: req.body,
  };

  const options = {
    returnOriginal: false,
    projection: {
      interests: false,
      contacts: false,
    },
  };

  let resident;
  //Fetch resident from app database. If an error occured in the query, send 500 with error message and return
  try {
    const result = await req.app.mongodb
      .db('app')
      .collection('residents')
      .findOneAndUpdate(query, update, options);

    resident = result.value;
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  if (resident) {
    res.status(200).json({
      message: 'Resident was updated!',
      newResident: resident,
    });
  } else {
    res
      .status(404)
      .json({ message: 'Resident was not found, or update failed.' });
  }
});

/* -------------- DELETE QUERIES -------------- */

/* DELETE ONE RESIDENT FROM CONTACTS */
route.delete('/:residentId/contacts/:contactId', async (req, res) => {
  const { residentId, contactId } = req.params;
  const _residentId = convertToObjectId(residentId, res);
  const _contactId = convertToObjectId(contactId, res);

  try {
    req.app.mongodb
      .db('app')
      .collection('residents')
      .updateOne(
        {
          _id: _residentId,
        },
        {
          $pull: {
            contacts: {
              _id: _contactId,
            },
          },
        }
      );

    res.status(200).json({ message: 'Contact is removed from contacts list!' });
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }
});

//Export this route to use in index.js
module.exports = route;
