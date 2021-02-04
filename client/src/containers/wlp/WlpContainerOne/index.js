import * as React from "react";
import InputAddSubtags from "../../../components/wlp/InputAddSubTags";
import InputBirthDate from "../../../components/wlp/InputBirthDate";
import InputBirthPlace from "../../../components/wlp/InputBirthPlace";
import "./wlpcontainer.css";

const WlpContainerOne = ({ section }) => {
  return (
    <div className="wlp-container">
      <h2 className="wlp-title">{section}</h2>
      <div className="wlp-input-container">
        <InputBirthDate />
        <InputBirthPlace />
        <InputAddSubtags />
      </div>
    </div>
  );
};
export default WlpContainerOne;
