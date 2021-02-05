import * as React from "react";
import InputAddSubtags from "../../../components/wlp/InputAddSubTags";
import InputBirthDate from "../../../components/wlp/InputBirthDate";
import InputBirthPlace from "../../../components/wlp/InputBirthPlace";
import InputCheckSelection from "../../../components/wlp/InputCheckSelection";
import InputCheckSelectionBig from "../../../components/wlp/InputCheckSelectionBig";
import "./wlpcontainer.css";

const WlpContainerEleven = ({ section }) => {
  return (
    <div className="wlp-container">
      <h2 className="wlp-title">{section}</h2>
      <div className="wlp-input-container">
        <div className="input-check-container">
          <p className="wlp-input-title">
            Bent u gelovig? In welke godsdienst gelooft u?
          </p>
          <div className="input-checkboxes">
            <InputCheckSelection label={"Christendom"} vectorTitle={"logo"} />
            <InputCheckSelection label={"Islam"} vectorTitle={"logo"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WlpContainerEleven;
