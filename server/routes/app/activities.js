const express = require('express');
const route = express.Router();

const statusMessages = require('../statusMessages');
const { convertToObjectId } = require('../util');

/* -------------- GET QUERIES -------------- */

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
      message: 'Activity was found! Or something was wrong with the server',
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
        message: 'Activity was added to collection!',
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
