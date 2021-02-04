import * as React from "react";
import ProgressBall from "../../../components/wlp/ProgressBall";
import "./progressbar.css";

const ProgressBar = () => {
  return (
    <div className="progress-container">
      <ProgressBall number={"1"} title={"Persoonlijke gegevens"} />
      <ProgressBall number={"2"} title={"Woon- en leefomstandigheden"} />
      <ProgressBall number={"3"} title={"Mentaal welbevinden en autonomie"} />
      <ProgressBall
        number={"4"}
        title={"Lichamelijk welbevinden en gezondheid"}
      />
      <ProgressBall
        number={"5"}
        title={"Algemeen beeld van het functioneren"}
      />
    </div>
  );
};
export default ProgressBar;
