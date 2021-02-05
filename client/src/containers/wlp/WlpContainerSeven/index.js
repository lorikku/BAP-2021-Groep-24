import * as React from "react";
import InputAddSubtags from "../../../components/wlp/InputAddSubTags";
import InputBirthDate from "../../../components/wlp/InputBirthDate";
import InputBirthPlace from "../../../components/wlp/InputBirthPlace";
import InputCheckSelection from "../../../components/wlp/InputCheckSelection";
import "./wlpcontainer.css";

const WlpContainerSeven = ({ section }) => {
  return (
    <div className="wlp-container">
      <h2 className="wlp-title">{section}</h2>
      <div className="wlp-input-container">
        <div className="input-check-container">
          <p className="wlp-input-title">
            Hebt u een huisdier? of had u vroeger een huisdier?
          </p>
          <div className="input-checkboxes">
            <InputCheckSelection label={"Kat"} vectorTitle={"logo"} />
            <InputCheckSelection label={"Hond"} vectorTitle={"logo"} />
            <InputCheckSelection label={"Vogel"} vectorTitle={"logo"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WlpContainerSeven;
