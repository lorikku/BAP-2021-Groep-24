import * as React from "react";
import InputAddSubtags from "../../../components/wlp/InputAddSubTags";
import InputBirthDate from "../../../components/wlp/InputBirthDate";
import InputBirthPlace from "../../../components/wlp/InputBirthPlace";
import InputCheckSelection from "../../../components/wlp/InputCheckSelection";
import InputCheckSelectionBig from "../../../components/wlp/InputCheckSelectionBig";

const WlpContainerNine = ({ section }) => {
  return (
    <div className="wlp-container">
      <h2 className="wlp-title">{section}</h2>
      <div className="wlp-input-container">
        <div className="input-check-container-big">
          <p className="wlp-input-title">
            Bent u een gezelschapsmens of bent u liever op zichzelf?
          </p>
          <div className="input-checkboxes">
            <InputCheckSelectionBig
              label={"Gezelschapsmens"}
              vectorTitle={"logo"}
            />
            <InputCheckSelectionBig
              label={"Liever op zichzelf"}
              vectorTitle={"logo"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WlpContainerNine;
