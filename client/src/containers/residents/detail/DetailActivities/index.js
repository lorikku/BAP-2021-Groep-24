import * as React from "react";
import ActivitySmall from "../../../../components/residents/detail/ActivitySmall";
import "./detailactivities.css";

const DetailActivities = ({ name }) => {
  return (
    <>
      <h2 className="visually-hidden">Activiteiten bewoner</h2>
      <div className="detailresident-activities">
        <h3 className="detailresident-activities-title">
          {name.first}'s Activiteiten
        </h3>
        <div className="activities-toggle-btn">
          <div className="activities-toggle-planned">
            <p className="activities-toggle-planned-text">Gepland</p>
          </div>
          <div className="activities-toggle-passed">
            <p className="activities-toggle-passed-text">Afgelopen</p>
          </div>
        </div>
        <ul className="activities-list">
          {/* activity component small */}
          <ActivitySmall
            name={"Wandeltocht: 't park van Kortrijk"}
            date={{ dateNr: "26", day: "Do" }}
            location={"Centrum Stad Kortrijk"}
            hour={"14:00 - 15:15"}
          />
                    <ActivitySmall
            name={"Wandeltocht: 't park van Kortrijk"}
            date={{ dateNr: "26", day: "Do" }}
            location={"Centrum Stad Kortrijk"}
            hour={"14:00 - 15:15"}
          />
                    <ActivitySmall
            name={"Wandeltocht: 't park van Kortrijk"}
            date={{ dateNr: "26", day: "Do" }}
            location={"Centrum Stad Kortrijk"}
            hour={"14:00 - 15:15"}
          />
        </ul>
      </div>
    </>
  );
};

export default DetailActivities;
