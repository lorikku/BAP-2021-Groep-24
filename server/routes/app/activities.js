const { startOfISOWeek, endOfISOWeek } = require('date-fns');
const express = require('express');
const route = express.Router();

const statusMessages = require('../statusMessages');
const { convertToObjectId } = require('../util');

/* -------------- GET QUERIES -------------- */

/* OVERVIEW FETCH */
route.get('/', async (req, res) => {
  const { floor, selectedDate} = req.query;

  let query = {};

  // If floor is in boundaries (0 - 3), use it to query, otherwise ignore floor
  if (floor) {
    if (-1 < floor && floor < 4) {
      query.floor = floor;
    }
  }

  //Extract activities PER WEEK (for overview)
  if (selectedDate) {
    const dateInt = parseInt(selectedDate);

    query.startTimestamp = {
      $gte: startOfISOWeek(dateInt).getTime(), //Bigger or equal than timestamp of first day of week (ISO week follows the right european standards)
      $lt: endOfISOWeek(dateInt).getTime(), //Less than timestamp of last day of week (ISO week follows the right european standards)
    };
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
          interests: false,
        },
      })
      .toArray();
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  if (activities) {
    res.status(200).json({
      message: 'Activities were found!',
      activities,
    });
  } else {
    res.status(404).json({
      message:
        'Activities were not found! Or something was wrong with the server',
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

/* -------------- PUT QUERIES -------------- */

//Updating the whole interestedResidents array (based off of the calculated matches)
route.put('/:activityId/interestedResidents', async (req, res) => {
  const { activityId } = req.params;
  const _activityId = convertToObjectId(activityId, res);

  const { interestedResidents } = req.body;
  //Convert all resident _id to ObjectIds
  const _interestedResidents = interestedResidents.map((resident) => {
    return {
      ...resident,
      _id: convertToObjectId(resident._id, res),
    };
  });

  try {
    //Add activity to activities collection
    await req.app.mongodb
      .db('app')
      .collection('activities')
      .updateOne(
        {
          _id: _activityId,
        },
        {
          $set: {
            interestedResidents: _interestedResidents,
            hasCalculated: true,
          },
        }
      );

    res.status(200).json({
      message: 'interestedResidents were added to activity!',
    });
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }
});

/* -------------- POST QUERIES -------------- */

//Posting activity (new)
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

//Posting resident to participatedResidents
route.post('/:activityId/participatedResidents', async (req, res) => {
  const { activityId } = req.params;
  const _activityId = convertToObjectId(activityId, res);

  const resident = {
    ...req.body,
    _id: convertToObjectId(req.body._id, res),
  };

  try {
    //Add activity to activities collection
    const result = await req.app.mongodb
      .db('app')
      .collection('activities')
      .updateOne(
        {
          _id: _activityId,
        },
        {
          $push: {
            participatedResidents: resident,
          },
        }
      );

    res.status(200).json({
      message: 'Resident was added to participating residents!',
      activityId: result.insertedId,
    });
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }
});

/* -------------- DELETE QUERIES -------------- */

/* DELETE ONE RESIDENT FROM PARTICIPATED RESIDENTS */
route.delete(
  '/:activityId/participatedResidents/:residentId',
  async (req, res) => {
    const { activityId, residentId } = req.params;

    const _activityId = convertToObjectId(activityId, res);
    const _residentId = convertToObjectId(residentId, res);

    try {
      const pointer = req.app.mongodb.db('app').collection('activities');

      //Remove contact from resident's contacts list
      await pointer.updateOne(
        {
          _id: _activityId,
        },
        {
          $pull: {
            participatedResidents: {
              _id: _residentId,
            },
          },
        }
      );

      res.status(200).json({
        message: 'Resident is removed from participated residents list!',
      });
    } catch (err) {
      res
        .status(statusMessages.INTERNAL_ERROR.statusCode)
        .json({ message: statusMessages.INTERNAL_ERROR.message });
      return;
    }
  }
);

/* DELETE ONE RESIDENT FROM INTERESTED RESIDENTS */
route.delete(
  '/:activityId/interestedResidents/:residentId',
  async (req, res) => {
    const { activityId, residentId } = req.params;

    const _activityId = convertToObjectId(activityId, res);
    const _residentId = convertToObjectId(residentId, res);

    try {
      const pointer = req.app.mongodb.db('app').collection('activities');

      //Remove contact from resident's contacts list
      await pointer.updateOne(
        {
          _id: _activityId,
        },
        {
          $pull: {
            interestedResidents: {
              _id: _residentId,
            },
          },
        }
      );

      res.status(200).json({
        message: 'Resident is removed from interested residents list!',
      });
    } catch (err) {
      res
        .status(statusMessages.INTERNAL_ERROR.statusCode)
        .json({ message: statusMessages.INTERNAL_ERROR.message });
      return;
    }
  }
);

module.exports = route;
