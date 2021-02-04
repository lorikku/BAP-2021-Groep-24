const express = require('express');
const { ObjectID } = require('mongodb');
const route = express.Router();

const statusMessages = require('../statusMessages');
const {convertToObjectId} = require('../util');

/* /app/interests */
route.get('/', async (req, res) => {
  let interests;
  //Fetch interests from app database and turn into array. If an error occured in the query, send 500 with error message and return
  try {
    interests = await req.app.mongodb
      .db('app')
      .collection('interests')
      .find()
      .toArray();
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  //Send found interests, else 404
  if (interests.length === 0) {
    res.status(404).json({
      message: 'Interests not found, or something was wrong with the databse.',
    });
  } else {
    res.status(200).json({
      message: 'Interests found!',
      interests,
    });
  }
});

/* /app/interests/:interestId */
route.get('/:interestId', async (req, res) => {
  const interestId = req.params.interestId;
  const _id = await convertToObjectId(interestId);

  const query = {
    _id,
  };

  let interest;
  //Fetch interest from app database. If an error occured in the query, send 500 with error message and return
  try {
    interest = await req.app.mongodb
      .db('app')
      .collection('interests')
      .findOne(query);
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  //Send found interest, else 404
  if (interest) {
    res.status(200).json({
      message: 'Interest found!',
      interest,
    });
  } else {
    res.status(404).json({ message: 'Interest not found!' });
  }
});

//Export this route to use in index.js
module.exports = route;
