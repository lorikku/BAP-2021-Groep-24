import * as React from "react";
import "./selectedints.css";
import Tag from "../../../components/interests/Tag";

const SelectedInts = () => {
  return (
    <div className="match-header-right">
      <p className="match-header-right-title">Geselecteerde Interesses</p>
      <ul className="match-header-right-tags">
        <Tag />
      </ul>
    </div>
  );
};

export default SelectedInts;
