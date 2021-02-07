const express = require('express');
const route = express.Router();

const statusMessages = require('../../statusMessages');
const { convertToObjectId } = require('../../util');

/* -------------- GET QUERIES -------------- */

/* get all activities for this resident */
route.get('/', async (req, res) => {
  const _residentId = convertToObjectId(req.residentId, res);

  let activities;
  //Fetch activities from app database. If an error occured in the query, send 500 with error message and return
  try {
    activities = await req.app.mongodb
      .db('app')
      .collection('activities')
      .find(
        {
          participatedResidents: {
            $elemMatch: {
              isGoing: true,
              residentId: _residentId,
            },
          },
        },
        {
          projection: {
            participatedResidents: false,
            interestedResidents: false,
            interests: false,
          },
        }
      )
      .toArray();
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  //Send found activities, else 404
  if (activities) {
    res.status(200).json({
      message: 'Activities found!',
      activities,
    });
  } else {
    res.status(404).json({ message: 'No activities for this resident, or resident, found!' });
  }
});

module.exports = route;
