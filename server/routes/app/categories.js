const express = require('express');
const { ObjectID } = require('mongodb');
const route = express.Router();

const statusMessages = require('../statusMessages')

/* /app/categories */
route.get('/', async (req, res) => {

  let categories = [];
  //Fetch categories from app database and turn into array. If an error occured in the query, send 500 with error message and return
  try {
    categories = await req.app.mongodb
    .db('app')
    .collection('categories')
    .find()
    .toArray();
  } catch (err) {
    res.status(statusMessages.INTERNAL_ERROR.statusCode).json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  //Send found categories, else 404
  if (categories.length === 0) {
    res.status(404).json({
      message: 'Categories not found, or something was wrong with the databse.',
    });
  } else {
    res.status(200).json({
      message: 'Categories found!',
      categories,
    });
  }
});

/* /app/categories/:categoryId */
route.get('/:categoryId', async (req, res) => {
  const categoryId = req.params.categoryId;

  let _id;
  //Try converting categoryId to an ObjectID for querying. If this fails => invalid id has been submitted.
  try {
    _id = ObjectID(categoryId);
  } catch (err) {
    res.status(statusMessages.INVALID_OBJECTID.statusCode).json({ message: statusMessages.INVALID_OBJECTID.message });
    return;
  }

  const query = {
    _id,
  };

  let category;
  //Fetch category from app database. If an error occured in the query, send 500 with error message and return
  try {
    category = await req.app.mongodb
      .db('app')
      .collection('categories')
      .findOne(query)
  } catch (err) {
    res.status(statusMessages.INTERNAL_ERROR.statusCode).json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }

  //Send found category, else 404
  if (category) {
    res.status(200).json({
      message: 'Category found!',
      category,
    });
  } else {
    res.status(404).json({ message: 'Category not found!' });
  }
});

//Export this route to use in index.js
module.exports = route;
