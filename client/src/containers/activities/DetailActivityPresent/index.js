import * as React from 'react';
import ResidentPresent from '../../../components/activities/ResidentPresent';
import './detailactivitypresent.css';

const DetailActivityPresent = ({ activity, participatedResidents, setParticipatedResidents }) => {

  return (
    <div className="dtl-act-present-container">
      <p className="dtl-act-present-title">Aanwezigen ({participatedResidents.length})</p>
      {/* <div className="dtl-act-present-emptystate">
            emptystate illustratie 
        </div> */}
      <ul className="dtl-act-present-list">
        {participatedResidents.map((resident, index) => (
          <ResidentPresent
            key={index}
            resident={resident}

            activityId={activity._id}
            setParticipatedResidents={setParticipatedResidents}
          />
        ))}
      </ul>
    </div>
  );
};

export default DetailActivityPresent;
