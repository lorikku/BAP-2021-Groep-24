import * as React from 'react';
import Select from 'react-select';

import './selectinput.css';

const SortingInput = ({ options, defaultValue, setSorting }) => {
  return (
    <div className="residents__filter">
      <label className="residents__filter__label" htmlFor="filter__sorting">
        Volgorde
      </label>
      <div id="filter__sorting">
        <Select
          onChange={(newSorting) => setSorting(newSorting)}
          className="residents__filter__sorting"
          isSearchable={false}
          defaultValue={sorting}
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

export default SortingInput;
