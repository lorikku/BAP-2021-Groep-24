import * as React from 'react';

import './floorinput.css';

const options = [123, 1, 2, 3];

const FloorInput = () => {
  const [selectedOption, setOption] = React.useState(0);
  const selectOption = (newOption) => {
    setOption(newOption);
  };
  
  return (
    <div className="residents__filter">
      <div className="residents__filter__floor">
        <label className="residents__filter__label" htmlFor="filter__floor">
          Floor
        </label>
        <div id="filter__floor">
          {options.map((option, index) => (
            <p
              onClick={() => selectOption(index)}
              key={index}
              className={`residents__filter__flooroption${
                index === selectedOption
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
