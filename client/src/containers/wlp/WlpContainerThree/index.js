import * as React from "react";
import InputAddSubtags from "../../../components/wlp/InputAddSubTags";
import InputAmountBox from "../../../components/wlp/InputAmountBox";
import InputBirthDate from "../../../components/wlp/InputBirthDate";
import InputBirthPlace from "../../../components/wlp/InputBirthPlace";
import "./wlpcontainer.css";

const WlpContainerThree = ({ section }) => {
  return (
    <div className="wlp-container">
      <h2 className="wlp-title">{section}</h2>
      <div className="wlp-input-container">
        <InputAmountBox title={"Hebt u broers?"}/>
        <InputAmountBox title={"Hebt u zussen?"}/>
      </div>
    </div>
  );
};
export default WlpContainerThree;
