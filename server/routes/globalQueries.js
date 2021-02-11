const statusMessages = require("./statusMessages");
const {convertToObjectId, stopExecution} = require("./util");

/* -- SINGLE RESIDENTS QUERIES -- */

const getResidentData = async (req, res, residentId, projection) => {
  const _id = convertToObjectId(residentId, res);

  /* Setting the options */
  const options = {
    projection,
  };

  /* Setting the query */
  const query = {
    _id,
  };

  let resident;
  //Fetch resident from app database. If an error occured in the query, send 500 with error message and return
  try {
    resident = await req.app.mongodb
      .db('app')
      .collection('residents')
      .findOne(query, options);
  } catch (err) {
      
    res
      .status(statusMessages.INTERNAL_ERROR.statusCode)
      .json({ message: statusMessages.INTERNAL_ERROR.message });
      stopExecution();
    return;
  }

  //Send found resident, else null
  return resident;
};

module.exports = { getResidentData };
