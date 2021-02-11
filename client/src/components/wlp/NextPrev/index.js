import * as React from "react";
import "./nextprev.css";

const NextPrev = ({decrStep, incrStep}) => {
  return (
    <div className="wlp-btns">
      <div onClick={decrStep} className="wlp-prev-btn">
        <img
          className="wlp-prev-btn-arrow"
          alt="previous button"
          src="/assets/img/arrow-left-white.svg"
        ></img>
      </div>
      <div onClick={incrStep} className="wlp-next-btn">
        <p className="wlp-next-btn-text">Volgende vraag</p>
        <img
          className="wlp-next-btn-arrow"
          alt="next button"
          src="/assets/img/arrow-right-white.svg"
        ></img>
      </div>
    </div>
  );
};
export default NextPrev;
