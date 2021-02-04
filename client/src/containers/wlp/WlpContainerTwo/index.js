import * as React from "react";
import InputAddSubtags from "../../../components/wlp/InputAddSubTags";
import InputAmountBox from "../../../components/wlp/InputAmountBox";
import InputBirthDate from "../../../components/wlp/InputBirthDate";
import InputBirthPlace from "../../../components/wlp/InputBirthPlace";
import "./wlpcontainer.css";

const WlpContainerTwo = ({ section }) => {
  return (
    <div className="wlp-container">
      <h2 className="wlp-title">{section}</h2>
      <div className="wlp-input-container">
        <InputAmountBox title={"Hebt u kinderen?"}/>
        <InputAmountBox title={"Hebt u kleinkinderen?"}/>
        <InputAmountBox title={"Hebt u achter- kleinkinderen?"}/>
      </div>
    </div>
  );
};
export default WlpContainerTwo;
