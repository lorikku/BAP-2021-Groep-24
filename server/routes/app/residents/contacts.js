const express = require('express');
const route = express.Router();

const statusMessages = require('../../statusMessages');
const {getResidentData} = require('../../globalQueries');
const { convertToObjectId } = require('../../util');

/* -------------- GET QUERIES -------------- */

/* -- GET RESIDENT CONTACTS BY RESIDENT ID -- */
/* /app/residents/:residentId/contacts */
route.get('/', async (req, res) => {
  const resident = await getResidentData(req, res, req.residentId, { contacts: true });

  if (!resident) {
    res.status(404).json({ message: 'Resident not found!' });
    return;
  }

  //Send found resident's contacts, else 404
  if (resident.contacts && resident.contacts.length > 0) {
    res.status(200).json({
      message: 'Resident contacts found!',
      contacts: resident.contacts,
    });
  } else {
    res.status(404).json({ message: 'Resident contacts not found!' });
  }
});

/* -------------- DELETE QUERIES -------------- */

/* DELETE ONE RESIDENT FROM CONTACTS */
route.delete('/:contactId', async (req, res) => {
  const residentId = req.residentId;
  const { contactId } = req.params;
  const _residentId = convertToObjectId(residentId, res);
  const _contactId = convertToObjectId(contactId, res);

  try {
    await req.app.mongodb
      .db('app')
      .collection('residents')
      .updateOne(
        {
          _id: _residentId,
        },
        {
          $pull: {
            contacts: {
              _id: _contactId,
            },
          },
        }
      );

    res.status(200).json({ message: 'Contact is removed from contacts list!' });
  } catch (err) {
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
    return;
  }
});

module.exports = route;
