import * as React from "react";
import InputActivity from "../../../components/wlp/InputActivity";
import InputAddSubtags from "../../../components/wlp/InputAddSubTags";
import InputBirthDate from "../../../components/wlp/InputBirthDate";
import InputBirthPlace from "../../../components/wlp/InputBirthPlace";
import InputCheckSelection from "../../../components/wlp/InputCheckSelection";
import InputCheckSelectionBig from "../../../components/wlp/InputCheckSelectionBig";
import "./wlpcontainer.css";

const WlpContainerActivity = ({ section, category }) => {
  return (
    <div className="wlp-container">
      <h2 className="wlp-title">{section}</h2>
      <div className="wlp-act-container">
        <p className="wlp-input-title">{category}</p>
        <div className="wlp-activity-container">
          <img
            className="activity-vector"
            alt="illustratie activiteit"
            src="/assets/img/activity-vector.svg"
          ></img>
          <div className="activities-list-wrapper">
            <div className="wlp-activities-list">
              <InputActivity label={"Het Nieuwsblad"} />
              <InputActivity label={"Het Nieuwsblad"} />
              <InputActivity label={"Het Nieuwsblad"} />
              <InputActivity label={"Het Nieuwsblad"} />
            </div>
            <InputAddSubtags
              icon={"book"}
              title={"Voeg een andere optie toe"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WlpContainerActivity;
