const interval = 1000 * 60 * 60 * 24 * 7 * 2; // 1000ms * 60s * 60h * 24d * 7w * 2 = 2 weeks

const isTimestampNew = (timestampInMs) => {
  const timestampToday = Date.now(); //Convert to miliseconds

  // Threshold that decides if a resident is considered 'new' or not
  const threshold = timestampToday - interval; // today, but 2 weeks ago

  if (timestampInMs > threshold) return true;

  return false;
};

const getMsUntilExpired = (timestampInMs) => {
  const timestampToday = Date.now(); //Convert to miliseconds
  const timestampFuture = timestampInMs + interval;

  return timestampFuture - timestampToday;
};

export { isTimestampNew, getMsUntilExpired };
