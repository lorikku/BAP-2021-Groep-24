import * as React from "react";
import InputAddSubtags from "../../../components/wlp/InputAddSubTags";
import InputAmountBox from "../../../components/wlp/InputAmountBox";
import InputBirthDate from "../../../components/wlp/InputBirthDate";
import InputBirthPlace from "../../../components/wlp/InputBirthPlace";
import InputText from "../../../components/wlp/InputText";
import "./wlpcontainer.css";

const WlpContainerFour = ({ section }) => {
  return (
    <div className="wlp-container">
      <h2 className="wlp-title">{section}</h2>
      <div className="wlp-input-container">
        <InputText
          inputId={"opleiding"}
          title={"Hebt u een opleiding gevolgd?"}
          placeholder={"vb. leerkracht"}
          icon={"book"}
        />
        <InputText
          inputId={"beroep"}
          title={"Hebt u een beroep uitgeoefend?"}
          placeholder={"vb. fabriekswerker"}
          icon={"case"}
        />
      </div>
    </div>
  );
};
export default WlpContainerFour;
