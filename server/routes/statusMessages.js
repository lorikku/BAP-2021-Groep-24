module.exports = {
  INTERNAL_ERROR: {
    statusCode: 500,
    message:
      'Something went wrong while querying. Check the error on server logs.',
  },
  INVALID_OBJECTID: {
    statusCode: 400,
    message: 'Invalid ID was requested.',
  },
};
