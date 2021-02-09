// import * as React from "react";
// import "./containerOne.css";

// const Container1 = () => {
//   <div>
//     <div></div>
//   </div>;
// };
// export default Container1;

import * as React from "react";
import WillemImg from "../../../components/wlp/WillemImg";
import "./containerOne.css";

const Container1 = () => {
  return (
    <div className="_1-container">
      <WillemImg />
      <div className="_1-main">
        <p className="_1-title">Hallo, mijn naam is "Willem"</p>

        <div className="_1-input-wrapper">
          <label className="_1-input-label" htmlFor="name">
            Wat is uw naam?
          </label>
          <div className="_1-input-btn-wrapper">
            <input className="_1-input" id="name"></input>
            <div className="_1-next-btn">
              <p className="_1-next-btn-text">Volgende</p>
              <img
                className="_1-next-btn-arrow"
                alt="next button"
                src="/assets/img/arrow-right-white.svg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Container1;
