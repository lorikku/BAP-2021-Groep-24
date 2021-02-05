import * as React from "react";
import "./inputcheckselection.css";

const InputCheckSelectionBig = ({ label, vectorTitle }) => {
  return (
    // classnames voor checked style: input-checked & label-checked
    // voor unchecked: verwijder checked styles DUUHHHHH

    <div className="input-checkbox ">
      <div className="input-check-div-big input-checked">
        {/* alleen wanneer gechecked tonen -->*/}
        <img
          className="input-check-icon"
          alt="check icoon"
          src="/assets/img/check-circle-white.svg"
        ></img>
        {/* <--- */}
        <img
          className="checkbox-vector-big"
          alt="test"
          src={"/assets/img/" + vectorTitle + ".png"}
        ></img>
        <p className="input-check-label label-checked">{label}</p>
      </div>
    </div>
  );
};
export default InputCheckSelectionBig;
