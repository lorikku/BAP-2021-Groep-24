import * as React from "react";
import "./selectedints.css";
import Tag from "../../../components/interests/Tag";

const SelectedInts = ({selectedInterests, toggleInterest}) => {
  return (
    <div className="match-header-right">
      <p className="match-header-right-title">Geselecteerde Interesses</p>
      <ul className="match-header-right-tags">
        <Tag interest={{name: "Golf"}} />
      </ul>
    </div>
  );
};

export default SelectedInts;
