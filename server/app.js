const express = require('express');

const app = express();
const port = 3001;

//Example json file
const users = require('../server/users.json');

//Set Access-Control-Allow-Origin header for all responses to http://localhost:3000 for debugging purposes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

//User handling
app.get('/users', (req, res) => {
  res.send({
    message: 'Users fetched!',
    users,
  });
});

app.get('/users/:userId', (req, res) => {
  const user = users.find((user) => user.id === req.params.userId);
  user ? res.send(user) : res.status(404).send({ message: 'User not found!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
