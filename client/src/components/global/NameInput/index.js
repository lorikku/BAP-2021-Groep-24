import * as React from 'react';

import './nameinput.css';

const NameInput = ({ name, setName }) => {
  return (
    <div className="residents__filter">
      <label className="residents__filter__label" htmlFor="filter__name">
        Zoek een bewoner
      </label>
      <input
        placeholder="Gerda Willems, 202"
        type="text"
        className="residents__filter__name residents__filter--child"
        id="filter__name"
        value={name}
        onChange={(newName) => setName(newName.currentTarget.value)}
      />
    </div>
  );
};

export default NameInput;