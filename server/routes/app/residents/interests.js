const express = require('express');
const route = express.Router();

const statusMessages = require('../../statusMessages');
const { getResidentData } = require('../../globalQueries');
const { convertToObjectId } = require('../../util');

/* -------------- GET QUERIES -------------- */

/* -- GET RESIDENT INTERESTS BY RESIDENT ID -- */
/* /app/residents/:residentId/interests */
route.get('/', async (req, res) => {
  const resident = await getResidentData(req, res, req.residentId, {
    interests: true,
  });

  if (!resident) {
    res.status(404).json({ message: 'Resident not found!' });
    return;
  }

  //Send found resident's interests, else 404
  if (resident.interests) {
    res.status(200).json({
      message: 'Resident interests found!',
      interests: resident.interests,
    });
  } else {
    res.status(404).json({ message: 'Resident interests not found!' });
  }
});

module.exports = route;
