const express = require('express');
const route = express.Router();

const statusMessages = require('../../statusMessages');
const { convertToObjectId, convertToRegExp } = require('../../util');
const { getResidentData } = require('../../globalQueries');

//Routes to use later on
const contactsRouter = require('./contacts');
const activitiesRouter = require('./activities');
const interestsRouter = require('./interests');

/* -------------- GET QUERIES -------------- */

/* /app/residents?name&sorting&floor */
route.get('/', async (req, res) => {
  let { name, sorting, floor, interests } = req.query;

  /* Setting the options (which data do we need?) */
  const options = interests
    ? {
        projection: {
          interests: true,
          name: true,
          photoUri: true,

        },
      }
    : {
        projection: {
          interests: false,
          contacts: false,
          isActive: false
        },
      };

  /* Setting the query */
  const query = {
    isActive: true,
  };

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

/* -- GET RESIDENT BY ID -- */
/* /app/residents/:residentId */
route.get('/:residentId', async (req, res) => {
  const resident = await getResidentData(req, res, req.params.residentId, {
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

/* -------------- OTHER ROUTES -------------- */

//Resident's contacts route
route.use(
  '/:residentId/contacts',
  (req, res, next) => {
    req.residentId = req.params.residentId;
    next();
  },
  contactsRouter
);

//Resident's activities route
route.use(
  '/:residentId/activities',
  (req, res, next) => {
    req.residentId = req.params.residentId;
    next();
  },
  activitiesRouter
);

//Resident's interests route
route.use(
  '/:residentId/interests',
  (req, res, next) => {
    req.residentId = req.params.residentId;
    next();
  },
  interestsRouter
);

//Export this route to use in index.js
module.exports = route;
