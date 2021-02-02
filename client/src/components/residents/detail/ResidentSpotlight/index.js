import * as React from 'react';

import './residentspotlight.css';

const ResidentSpotlight = ({ name }) => {
  return (
    <div className="resident-spotlight-container">
      <img
        className="spotlight-vector"
        alt="a spotlight vector illustration"
        src="/assets/img/spotlight-pop.svg"
      ></img>
      <div className="spotlight-text-wrapper">
        <p className="spotlight-text">
          Geef {name} meer aandacht door haar profiel bovenaan het overzicht te
          zetten.
        </p>
        <div className="spotlight-btn">
          <img
            className="spotlight-btn-star"
            alt="spotlight star icon inside button"
            src="/assets/img/star-filled.svg"
          ></img>
          <p className="spotlight-btn-text">Zet in Spotlight</p>
        </div>
      </div>
    </div>
  );
};

export default ResidentSpotlight;
