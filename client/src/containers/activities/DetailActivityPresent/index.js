import * as React from "react";
import ResidentPresent from "../../../components/activities/ResidentPresent";
import "./detailactivitypresent.css";

const DetailActivityPresent = () => {
  return (
    <div className="dtl-act-present-container">
      <p className="dtl-act-present-title">Aanwezigen (10)</p>
      {/* <div className="dtl-act-present-emptystate">
            emptystate illustratie 
        </div> */}
      <ul className="dtl-act-present-list">
        <ResidentPresent
          name={{ first: "Mathilda", last: "Dejonckheere" }}
          room={"Kamer 201"}
        />
      </ul>
    </div>
  );
};

export default DetailActivityPresent;
