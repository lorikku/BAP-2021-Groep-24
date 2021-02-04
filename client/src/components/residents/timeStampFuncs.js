const isTimestampNew = (timestampInMs) => {
  const timestampToday = Date.now(); //Convert to seconds

  // Threshold that decides if a resident is considered 'new' or not
  const interval = 1000 * 60 * 60 * 24 * 7 * 2; // 1000ms * 60s * 60h * 24d * 7w * 2 = 2 weeks
  const threshold = timestampToday - interval; // today, but 2 weeks ago

  if (timestampInMs > threshold) return true;

  return false;
};

export { isTimestampNew };
