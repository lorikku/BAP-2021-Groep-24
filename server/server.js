const express = require('express');
const MongoClient = require('mongodb').MongoClient;

//Using and initializing dotenv to read MongoDB URI from .env file
const dotenv = require('dotenv');
dotenv.config();

/* 

 API SERVER (EXPRESS)

*/
const app = express();
const port = 3001;

//Set Access-Control-Allow-Origin header for all responses to http://localhost:3000 for debugging purposes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  if (!req.app.mongodb) {
    res.status(503).json({
      message: 'Connection with MongoDB failed',
    });
    return;
  }

  next();
});

app.get('/residents', async (req, res) => {
  const options = {
    //Hide _id (object id) in response
    projection: { _id: 0 },
  };

  //Fetch residents from app database and turn into array
  const residents = await req.app.mongodb
    .db('app')
    .collection('residents')
    .find(null, options)
    .toArray();

  //Send found residents, if found, as response
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

app.get('/residents/:residentId', async (req, res) => {
  //Query to use for searching
  const query = {
    id: req.params.residentId,
  };

  const options = {
    //Hide _id (object id) in response
    projection: { _id: 0 },
  };

  //Fetch resident from app database and turn into object
  const resident = await req.app.mongodb
    .db('app')
    .collection('residents')
    .find(query, options)
    .next();

  //Send found resident, if found, as response
  if (resident) {
    res.status(200).json({
      message: 'Resident found!',
      resident,
    });
  } else {
    res.status(404).json({ message: 'Resident not found!' });
  }
});

/* 

 DATABASE CLIENT (MONGODB)

*/
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err, db) => {
  if (err) {
    console.error('Error!', err);
  } else {
    console.log('Login was succesful!');
    //Add db (client) object to Express process if connection was succesful
    app.mongodb = db;
  }
  //Initialize server listener AFTER connection attempt
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
