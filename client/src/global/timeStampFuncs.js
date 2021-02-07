import { format } from 'date-format-parse';

const interval = 60 * 60 * 24 * 7 * 2; // 60s * 60h * 24d * 7w * 2 = 2 weeks

const toSec = (timestamp) => parseInt(format(timestamp, 'X'));

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

const locale = {
  // MMMM
  months: [
    'Januari',
    'Februari',
    'Maart',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Augustus',
    'September',
    'October',
    'November',
    'December',
  ],
  // MMM
  monthsShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  // dddd
  weekdays: [
    'Zondag',
    'Maandag',
    'Dinsdag',
    'Woensdag',
    'Donderdag',
    'Vrijdag',
    'Zaterdag',
  ],
  // ddd
  weekdaysShort: ['Zon', 'Maa', 'Din', 'Woe', 'Don', 'Vri', 'Zat'],
  // dd
  weekdaysMin: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
  // [A a] format the ampm. The following is the default value
  meridiem: (h, m, isLowercase) => {
    const word = h < 12 ? 'AM' : 'PM';
    return isLowercase ? word.toLocaleLowerCase() : word;
  },
  // [A a] used by parse to match the ampm. The following is the default value
  meridiemParse: /[ap]\.?m?\.?/i,
  // [A a] used by parse to determine if the matching string is pm. The following is the default value
  isPM: (input) => {
    return (input + '').toLowerCase().charAt(0) === 'p';
  },
};

export { isTimestampNew, getSecUntilExpired, locale, toSec };
