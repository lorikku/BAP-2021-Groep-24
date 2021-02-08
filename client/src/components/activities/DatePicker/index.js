import * as React from 'react';
import { getDay } from 'date-fns';
import { nlBE } from 'date-fns/locale';
import { DatePickerCalendar } from 'react-nice-dates';

import 'react-nice-dates/build/style.css';
import './datepicker.css';

const DatePicker = ({ date, changeInput }) => {
  return (
    <>
      <DatePickerCalendar
        date={date}
        onDateChange={(newDate) => changeInput('date', newDate)}
        locale={nlBE}
      />
    </>
  );
};

export default DatePicker;
