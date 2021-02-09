const { startOfISOWeek, endOfISOWeek } = require('date-fns');
const express = require('express');
const route = express.Router();

const statusMessages = require('../statusMessages');
const { convertToObjectId } = require('../util');

/* -------------- GET QUERIES -------------- */

/* OVERVIEW FETCH */
route.get('/', async (req, res) => {
  const { selectedDate, floor } = req.query;

  let query = {};

  //Extract activities per week (for overview)
  if (selectedDate) {
    const dateInt = parseInt(selectedDate);

    query.startTimestamp = {
      $gte: startOfISOWeek(dateInt).getTime(), //Bigger or equal than timestamp of first day of week (ISO week follows the right european standards)
      $lt: endOfISOWeek(dateInt).getTime(), //Less than timestamp of last day of week (ISO week follows the right european standards)
    };
  }

  // If floor is in boundaries (0 - 3), use it to query, otherwise ignore floor
  if (floor) {
    if (-1 < floor && floor < 4) {
      query.floor = floor;
    }
  }

  let activities;
  try {
    //Add activities to activities collection
    activities = await req.app.mongodb
      .db('app')
      .collection('activities')
      .find(query, {
        projection: {
          //We don't need the interests in the overview
          interests: false
        }
      })
      .toArray();
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  if (activities.length !== 0) {
    res.status(200).json({
      message: 'Activities were found!',
      activities,
    });
  } else {
    res.status(404).json({
      message: 'Activities were not found! Or something was wrong with the server',
    });
  }
});

route.get('/:activityId', async (req, res) => {
  const { activityId } = req.params;
  const _activityId = convertToObjectId(activityId, res);

  let activity;
  try {
    //Add activity to activities collection
    activity = await req.app.mongodb
      .db('app')
      .collection('activities')
      .findOne({
        _id: _activityId,
      });
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  if (activity) {
    res.status(200).json({
      message: 'Activity was found!',
      activity,
    });
  } else {
    res.status(404).json({
      message: 'Activity was not found! Or something was wrong with the server',
    });
  }
});

/* -------------- GET QUERIES -------------- */

route.post('/', async (req, res) => {
  try {
    //Add activity to activities collection
    const result = await req.app.mongodb
      .db('app')
      .collection('activities')
      .insertOne(req.body);

    if (result.insertedId) {
      res.status(200).json({
        message: 'Activity was added to database!',
        activityId: result.insertedId,
      });
    }
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }
});

module.exports = route;
