const express = require('express');
const route = express.Router();

const statusMessages = require('../../statusMessages');
const { convertToObjectId } = require('../../util');

/* -------------- GET QUERIES -------------- */

/* get all activities for this resident */
route.get('/', async (req, res) => {
  const { beforeDate, afterDate, fetchInteresting } = req.query;
  const _residentId = convertToObjectId(req.residentId, res);

  let query = {};
  let options = {};

  //Extract activities BEFORE given date
  if (beforeDate) {
    const dateInt = parseInt(beforeDate);

    query.startTimestamp = {
      $lt: dateInt,
    };
  }

  //Extract activities AFTER given date
  if (afterDate) {
    const dateInt = parseInt(afterDate);

    query.endTimestamp = {
      $gte: dateInt,
    };
  }

  //If this query was set -> fetch interesting activities for resident
  if (fetchInteresting) {
    query.interestedResidents = {
      $elemMatch: {
        _id: _residentId,
      },
    };

    options.projection = {
      participatedResidents: false,
    };
  } else {
    //Else -> fetch participating activities for resident
    query.participatedResidents = {
      $elemMatch: {
        _id: _residentId,
      },
    };

    options.projection = {
      interestedResidents: false,
    };
  }

  let activities;
  //Fetch activities from app database. If an error occured in the query, send 500 with error message and return
  try {
    activities = await req.app.mongodb
      .db('app')
      .collection('activities')
      .find(query, options)
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
    res.status(404).json({
      message: 'No activities for this resident, or resident, found!',
    });
  }
});

module.exports = route;
