const express = require('express');
const { ObjectID } = require('mongodb');
const route = express.Router();

const statusMessages = require('../statusMessages')

/* /app/dependencies */
route.get('/', async (req, res) => {

  let dependencies = [];
  //Fetch dependencies from app database and turn into array. If an error occured in the query, send 500 with error message and return
  try {
    dependencies = await req.app.mongodb
    .db('app')
    .collection('dependencies')
    .find()
    .toArray();
  } catch (err) {
    res.status(statusMessages.INTERNAL_ERROR.statusCode).json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  //Send found dependencies, else 404
  if (dependencies.length === 0) {
    res.status(404).json({
      message: 'Dependencies not found, or something was wrong with the databse.',
    });
  } else {
    res.status(200).json({
      message: 'Dependencies found!',
      dependencies,
    });
  }
});

/* /app/dependencies/:dependencyId */
route.get('/:dependencyId', async (req, res) => {
  const dependencyId = req.params.dependencyId;

  let _id;
  //Try converting dependencyId to an ObjectID for querying. If this fails => invalid id has been submitted.
  try {
    _id = ObjectID(dependencyId);
  } catch (err) {
    res.status(statusMessages.INVALID_OBJECTID.statusCode).json({ message: statusMessages.INVALID_OBJECTID.message });
    return;
  }

  const query = {
    _id,
  };

  let dependency;
  //Fetch dependency from app database. If an error occured in the query, send 500 with error message and return
  try {
    dependency = await req.app.mongodb
      .db('app')
      .collection('dependencies')
      .findOne(query)
  } catch (err) {
    res.status(statusMessages.INTERNAL_ERROR.statusCode).json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  //Send found dependency, else 404
  if (dependency) {
    res.status(200).json({
      message: 'Dependency found!',
      dependency,
    });
  } else {
    res.status(404).json({ message: 'Dependency not found!' });
  }
});

//Export this route to use in index.js
module.exports = route;
