import * as React from 'react';
import Select from 'react-select';

import './selectinput.css';

const options = [
  {
    value: 1,
    label: 'Niew - Oud',
  },
  {
    value: 2,
    label: 'Oud - Nieuw',
  },
];

const SelectInput = () => {
  return (
    <div className="residents__filter">
      <label
        className="residents__filter__label"
        htmlFor="filter__sorting"
      >
        Volgorde
      </label>
      <div id="filter__sorting">
        <Select
          className="residents__filter__sorting"
          isSearchable={false}
          defaultValue={options[0]}
          options={options}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              neutral0: '#F2F6FF',
              primary25: '#F2F6FF',
              primary: '#476FF5',
            },
          })}
        />
      </div>
    </div>
  );
};

export default SelectInput;
