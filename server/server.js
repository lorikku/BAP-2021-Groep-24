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

//Defining the /app API route prefix for all content-related requests
app.use('/app', require('./routes/app'));
//Defining the /auth API route prefix for all authentication-related requests
app.use('/auth', require('./routes/auth'));


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
