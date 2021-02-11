import * as React from 'react';
import './wlpsubmitted.css'

const WlpSubmitted = ({name}) => {
  return (
    <div className="wlp-submitted-container">
      <div className="wlp-submitted-wrapper">
        <img alt="logo heilig hart" src="/assets/img/logo.svg" width="100" />
        <p className="wlp-submitted-title">Proficiat {name.split(' ')[0]}, you made it!</p>
        <p className="wlp-submitted-text">
          Bedankt om het Woon - en Leefplan in te vullen.
          <br />
          Wij wensen jou een prettig verblijf in het zorgcentrum Heilig Hart.
        </p>
        <p className="wlp-submitted-text">Tot binnenkort!</p>
      </div>
      <img
        alt="illustratie"
        className="wlp-submitted-img"
        src="/assets/img/wlp-submitted.svg"
      />
    </div>
  );
};

export default WlpSubmitted;
 