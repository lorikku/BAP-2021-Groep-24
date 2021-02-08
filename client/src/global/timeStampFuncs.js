import { format } from 'date-fns';

const interval = 60 * 60 * 24 * 7 * 2; // 60s * 60h * 24d * 7w * 2 = 2 weeks

const toSec = (timestamp) => parseInt(format(timestamp, 't'));

const generateTimestampInSec = (timestamp) => {
  if (timestamp) {
    if (timestamp.toString().length === 13) return toSec(timestamp);
  }

  return timestamp;
};

const isTimestampNew = (timestamp) => {
  const timestampInSec = generateTimestampInSec(timestamp);
  const timestampToday = toSec(Date.now()); //Convert to seconds

  // Threshold that decides if a resident is considered 'new' or not
  const threshold = timestampToday - interval; // today, but 2 weeks ago

  if (timestampInSec > threshold) return true;

  return false;
};

const getSecUntilExpired = (timestamp) => {
  const timestampInSec = generateTimestampInSec(timestamp);
  const timestampToday = toSec(Date.now()); //Convert to seconds
  const timestampFuture = timestampInSec + interval; // today, but 2 in the future

  return timestampFuture - timestampToday;
};

export { isTimestampNew, getSecUntilExpired, toSec };
