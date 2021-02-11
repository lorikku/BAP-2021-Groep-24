import * as React from "react";
import InputAddSubtags from "../../../components/wlp/InputAddSubTags";
import InputAmountBox from "../../../components/wlp/InputAmountBox";
import InputBirthDate from "../../../components/wlp/InputBirthDate";
import InputBirthPlace from "../../../components/wlp/InputBirthPlace";
import WillemImg from "../../../components/wlp/WillemImg";

const WlpStepDivision = ({ stepTitle, p1, p2 }) => {
  return (
    <div className="wlp-container wlp-division">
      <div className="wlp-division-left">
        <WillemImg />
      </div>
      <div className="wlp-division-right">
        <p className="division-title">{stepTitle}</p>
        <p className="division-subtext">{p1}</p>
        <p className="division-subtext">{p2}</p>
      </div>
    </div>
  );
};
export default WlpStepDivision;
