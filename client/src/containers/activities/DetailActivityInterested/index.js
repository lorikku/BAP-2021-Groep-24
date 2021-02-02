import * as React from "react";
import ResidentInterested from "../../../components/activities/ResidentInterested";
import "./detailactivityinterested.css";

const DetailActivityInterested = () => {
  return (
    <div className="dtl-act-int-container">
      <p className="dtl-act-int-title">Wellicht geïnteresseerd (32)</p>
      <div className="dtl-act-int-list-btn-wrapper">
        <ul className="dtl-act-int-list">
          <ResidentInterested
            name={{ first: "Fréderique", last: "Van Den Broucke" }}
            room={"Kamer 201"}
          />
        </ul>
        <div className="dtl-act-int-btn">
          <p className="dtl-act-int-btn-text">Bewoner uitnodigen</p>
        </div>
      </div>
    </div>
  );
};

export default DetailActivityInterested;
