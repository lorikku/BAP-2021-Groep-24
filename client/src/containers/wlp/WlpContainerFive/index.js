import * as React from "react";
import InputAddSubtags from "../../../components/wlp/InputAddSubTags";
import InputAmountBox from "../../../components/wlp/InputAmountBox";
import InputBirthDate from "../../../components/wlp/InputBirthDate";
import InputBirthPlace from "../../../components/wlp/InputBirthPlace";
import InputText from "../../../components/wlp/InputText";

const WlpContainerFive = ({ section }) => {
  return (
    <div className="wlp-container">
      <h2 className="wlp-title">{section}</h2>
      <div className="wlp-input-container">
        <InputAddSubtags
          title={
            "beoefent u nog een hobby? Wat deed u vroeger in uw vrije tijd?"
          }
          icon={"book"}
          placeholder={"vb. kaarten"}
        />
      </div>
    </div>
  );
};
export default WlpContainerFive;
