const express = require('express');
const route = express.Router();

const statusMessages = require('../statusMessages');
const { convertToObjectId, stopExecution } = require('../util');

//Dummy login
const loggedInStaffId = convertToObjectId('601acc5f47326585f23b2ade');

/* -------------- GET QUERIES -------------- */

/* GET ALL OF MY RESIDENTS */
route.get('/my-residents', async (req, res) => {
  let { name, sorting, floor } = req.query;

  /* Setting the query */
  const query = {
    name: '',
    roomNr: '',
    floor: '',
  };

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
    case 'new-old':
      sorting = {
        'myResidents._id': -1,
      };
      break;

    case 'old-new':
      sorting = {
        'myResidents._id': 1,
      };
      break;

    default:
      sorting = {
        'myResidents._id': -1,
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
        { $match: { _id: loggedInStaffId } },
        { $unwind: '$myResidents' },
        {
          $match: {
            'myResidents.name': {
              $regex: query.name,
              $options: 'i',
            },
            'myResidents.roomNr': {
              $regex: query.roomNr,
              $options: 'i',
            },
            'myResidents.floor': {
              $regex: query.floor,
              $options: 'i',
            },
          },
        },
        { $sort: sorting },
        { $group: { _id: '$_id', myResidents: { $push: '$myResidents' } } },
      ])
      .next();

    if (result) myResidents = result.myResidents;
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  //Send found myResidents, else 404
  if (myResidents.length === 0) {
    res.status(404).json({
      message:
        'My residents not found, or something was wrong with the databse.',
    });
  } else {
    res.status(200).json({
      message: 'My residents found!',
      myResidents,
    });
  }
});

/* GETTING ONE RESIDENT FROM MYRESIDENTS BY ID */
const getMyResidentById = async (_id, req, res) => {
  let myResident;
  try {
    result = await req.app.mongodb
      .db('auth')
      .collection('staff')
      .findOne(
        { _id: loggedInStaffId },
        {
          projection: {
            myResidents: {
              $elemMatch: { _id },
            },
          },
        }
      );

    if (result.myResidents) {
      myResident = result.myResidents[0];
    }
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    stopExecution();
    return;
  }

  return myResident;
};

/* GETTING ONE RESIDENT FROM MY RESIDENTS */
route.get('/my-residents/:residentId', async (req, res) => {
  const residentId = req.params.residentId;
  const _id = convertToObjectId(residentId, res);

  const myResident = await getMyResidentById(_id, req, res);

  if (myResident) {
    res.status(200).json({
      message: 'My resident found!',
    });
  } else {
    res.status(404).json({
      message: 'This resident is not in my residents list',
    });
  }
});

/* -------------- POST QUERIES -------------- */

/* ADDING RESIDENT TO MY RESIDENTS */
route.post('/my-residents', async (req, res) => {
  const _id = convertToObjectId(req.body._id, res);

  const myResident = await getMyResidentById(_id, req, res);

  if (myResident) {
    res
      .status(409)
      .json({ message: 'This resident is already in my residents' });
    return;
  }

  try {
    req.app.mongodb
      .db('auth')
      .collection('staff')
      .updateOne(
        {
          _id: loggedInStaffId,
        },
        {
          $push: {
            myResidents: {
              ...req.body,
              _id,
            },
          },
        }
      );

    res.status(200).json({ message: 'Resident is added to my residents!' });
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }
});

/* -------------- PUT QUERIES -------------- */




/* -------------- DELETE QUERIES -------------- */

/* DELETE ONE RESIDENT FROM MY RESIDENTS */
route.delete('/my-residents/:residentId', async (req, res) => {
  const residentId = req.params.residentId;
  const _id = convertToObjectId(residentId, res);

  const myResident = await getMyResidentById(_id, req, res);

  if (!myResident) {
    res
      .status(409)
      .json({ message: 'This resident is not in my residents yet' });
    return;
  }

  try {
    req.app.mongodb
      .db('auth')
      .collection('staff')
      .updateOne(
        {
          _id: loggedInStaffId,
        },
        {
          $pull: {
            myResidents: {
              ...req.body,
              _id,
            },
          },
        }
      );

    res.status(200).json({ message: 'Resident is removed from my residents!' });
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }
});

//Export this route to use in index.js
module.exports = route;
