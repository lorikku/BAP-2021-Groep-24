import * as React from 'react';
import ResidentInterested from '../../../components/activities/ResidentInterested';
import './detailactivityinterested.css';

const DetailActivityInterested = ({ residents }) => {
  return (
    <div className="dtl-act-int-container">
      <p className="dtl-act-int-title">
        Wellicht geïnteresseerd ({residents.length})
      </p>
      <div className="dtl-act-int-list-btn-wrapper">
        <ul className="dtl-act-int-list">
          {residents.map((resident, index) => (
            <ResidentInterested key={index} resident={resident} />
          ))}
        </ul>
        <div className="dtl-act-int-btn">
          <p className="dtl-act-int-btn-text">Bewoner uitnodigen</p>
        </div>
      </div>
    </div>
  );
};

export default DetailActivityInterested;
