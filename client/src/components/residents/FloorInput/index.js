import * as React from 'react';

import './floorinput.css';

const FloorInput = ({options, floor, setFloor}) => {
  
  return (
    <div className="residents__filter">
      <div className="residents__filter__floor">
        <label className="residents__filter__label" htmlFor="filter__floor">
          Floor
        </label>
        <div id="filter__floor">
          {options.map((option, index) => (
            <p
              onClick={() => setFloor(option)}
              key={index}
              className={`residents__filter__flooroption${
                option === floor
                  ? ' residents__filter__flooroption--active'
                  : ''
              }`}
            >
              {option}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloorInput;
