import * as React from "react";
import "./detailactivities.css";

const DetailActivities = ({ name }) => {
  return (
    <>
      <h2 className="visually-hidden">Activiteiten bewoner</h2>
      <div className="detailresident-activities">
        <h3 className="detailresident-activities-title">
          {name.first}'s Activiteiten
        </h3>
      </div>
      <div className="activities-toggle-btn">
        <div className="activities-toggle-planned">
          <p className="activities-toggle-planned-text">Gepland</p>
        </div>
        <div className="activities-toggle-passed">
          <p className="activities-toggle-passed-text">Afgelopen</p>
        </div>
      </div>
      <div className="activities-list">
          {/* activity component small */}
            
        </div>
    </>
  );
};

export default DetailActivities;
