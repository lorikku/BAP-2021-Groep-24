import * as React from 'react';
import ResidentPresent from '../../../components/activities/ResidentPresent';
import './detailactivitypresent.css';

const DetailActivityPresent = ({ residents }) => {
  return (
    <div className="dtl-act-present-container">
      <p className="dtl-act-present-title">Aanwezigen ({residents.length})</p>
      {/* <div className="dtl-act-present-emptystate">
            emptystate illustratie 
        </div> */}
      <ul className="dtl-act-present-list">
        {residents.map((resident, index) => (
          <ResidentPresent
            key={index}
            resident={resident}
          />
        ))}
      </ul>
    </div>
  );
};

export default DetailActivityPresent;
