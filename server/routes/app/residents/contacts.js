const express = require('express');
const route = express.Router();

const statusMessages = require('../../statusMessages');
const { getResidentData } = require('../../globalQueries');
const { convertToObjectId } = require('../../util');

/* -------------- GET QUERIES -------------- */

/* -- GET RESIDENT CONTACTS BY RESIDENT ID -- */
/* /app/residents/:residentId/contacts */
route.get('/', async (req, res) => {
  const resident = await getResidentData(req, res, req.residentId, {
    contacts: true,
  });

  if (!resident) {
    res.status(404).json({ message: 'Resident not found!' });
    return;
  }

  //Send found resident's contacts, else 404
  if (resident.contacts) {
    res.status(200).json({
      message: 'Resident contacts found!',
      contacts: resident.contacts,
    });
  } else {
    res.status(404).json({ message: 'Resident contacts not found!' });
  }
});

/* -------------- POST QUERIES -------------- */

route.post('/', async (req, res) => {
  const { resident, contact, addedAt, matchedInterests } = req.body;

  const _residentId = convertToObjectId(req.residentId, res);
  const _contactId = convertToObjectId(contact._id, res);

  try {
    const pointer = req.app.mongodb.db('app').collection('residents');

    //Add contact to resident's contacts list
    await pointer.updateOne(
      {
        _id: _residentId,
      },
      {
        $push: {
          contacts: {
            ...contact,
            _id: _contactId,
            matchedInterests,
            addedAt
          },
        },
      }
    );

    //Add resident to contact's contacts list
    await pointer.updateOne(
      {
        _id: _contactId,
      },
      {
        $push: {
          contacts: {
            ...resident,
            _id: _residentId,
            matchedInterests,
            addedAt
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

/* -------------- DELETE QUERIES -------------- */

/* DELETE ONE RESIDENT FROM CONTACTS */
route.delete('/:contactId', async (req, res) => {
  const residentId = req.residentId;
  const { contactId } = req.params;

  const _residentId = convertToObjectId(residentId, res);
  const _contactId = convertToObjectId(contactId, res);

  try {
    const pointer = req.app.mongodb.db('app').collection('residents');

    //Remove contact from resident's contacts list
    await pointer.updateOne(
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

    //Remove resident from contact's contacts list
    await pointer.updateOne(
      {
        _id: _contactId,
      },
      {
        $pull: {
          contacts: {
            _id: _residentId,
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
