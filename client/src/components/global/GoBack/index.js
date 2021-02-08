import * as React from 'react';
import { Link } from 'react-router-dom';

import './goback.css';

const GoBack = ({ path, text, func }) => {
  return (
    <div className="goback-container">
      {func ? (
        <div onClick={func} className="goback-container">
          <div className="goback-arrow-wrapper">
            <img
              className="goback-arrow"
              alt="pijl om terug te keren"
              src="/assets/img/back-arrow.svg"
            ></img>
            <p className="goback-text">{text}</p>
          </div>
        </div>
      ) : (
        <Link to={path} className="goback-container">
          <div className="goback-arrow-wrapper">
            <img
              className="goback-arrow"
              alt="pijl om terug te keren"
              src="/assets/img/back-arrow.svg"
            ></img>
            <p className="goback-text">{text}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default GoBack;
