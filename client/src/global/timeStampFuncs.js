import { endOfISOWeek, startOfISOWeek, format } from 'date-fns';
import { nlBE } from 'date-fns/locale';
const locale = {
  locale: nlBE,
  weekStartsOn: 1,
};

//Get first day of the week of a date
const getFirstDayOfWeek = (date) => {
  const time = startOfISOWeek(date);
  return format(time, 'd MMM');
};
//Get first day of the week of a date
const getLastDayOfWeek = (date) => {
  const time = endOfISOWeek(date);
  return format(time, 'd MMM');
};

export { getFirstDayOfWeek, getLastDayOfWeek, locale };

const interval = 1000 * 60 * 60 * 24 * 7 * 2; // 1000ms * 60s * 60h * 24d * 7w * 2 = 2 weeks

const isTimestampNew = (timestamp) => {
  const timestampInMs = timestamp;
  const timestampToday = Date.now();

  // Threshold that decides if a resident is considered 'new' or not
  const threshold = timestampToday - interval; // today, but 2 weeks ago

  if (timestampInMs > threshold) return true;

  return false;
};

const getMsUntilExpired = (timestamp) => {
  const timestampInMs = timestamp;
  const timestampToday = Date.now(); //Convert to seconds
  const timestampFuture = timestampInMs + interval; // today, but 2 in the future

  return timestampFuture - timestampToday;
};

export { isTimestampNew, getMsUntilExpired };
