const { ObjectID } = require('mongodb');
const statusMessages = require('./statusMessages');

const stopExecution = () => {
  throw new Error('stopExecution');
};

const convertToObjectId = (id, res) => {
  if (!id) {
    res
      .status(statusMessages.INVALID_OBJECTID.statusCode)
      .json({ message: statusMessages.INVALID_OBJECTID.message });
    //Execution is stopped here to prevent other routes of sending more responses after an error occured here
    stopExecution();
    return;
  }

  let _id;
  //Try converting residentId to an ObjectID for querying. If this fails => invalid id has been submitted.
  try {
    _id = ObjectID(id);
  } catch (err) {
    res
      .status(statusMessages.INVALID_OBJECTID.statusCode)
      .json({ message: statusMessages.INVALID_OBJECTID.message });
    //Execution is stopped here to prevent other routes of sending more responses after an error occured here
    stopExecution();
    return;
  }

  return _id;
};

const convertToRegExp = (value, option, res) => {
  let regValue;

  try {
    regValue = new RegExp(value, option);
  } catch (err) {
    res
      .status(statusMessages.INVALID_OBJECTID.statusCode)
      .json({ message: statusMessages.INVALID_OBJECTID.message });
    //Execution is stopped here to prevent other routes of sending more responses after an error occured here
    stopExecution();
    return;
  }

  return regValue;
};

module.exports = {
  convertToObjectId,
  convertToRegExp,
  stopExecution,
};
