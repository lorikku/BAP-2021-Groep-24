import * as React from 'react';

import './nameinput.css';

const NameInput = () => {
  return (
    <div className="residents__filter">
      <label className="residents__filter__label" htmlFor="filter__name">
        Zoek een bewoner
      </label>
      <input
        placeholder="Gerda Willems"
        type="text"
        className="residents__filter__name residents__filter--child"
        id="filter__name"
      />
    </div>
  );
};

export default NameInput;
