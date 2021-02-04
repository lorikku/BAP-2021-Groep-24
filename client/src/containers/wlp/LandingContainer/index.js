import * as React from "react";
import "./landingcontainer.css";

const LandingContainer = () => {
  return (
    <div className="landing-container">
      <div className="landing-left">
        <div className="left-logo-wrapper">
          <img
            className="left-logo"
            alt="heilig hart logo"
            src="/assets/img/logo.png"
          ></img>
          <a className="left-link" href="https://www.h-hart.be/">
            Heilig Hart Zorggroep
          </a>
        </div>
        <div>
          <p className="welcome-title">
            Welkom <br></br>toekomstige bewoner!
          </p>
          <p className="welcome-sub">
            Zorggroep Heilig Hart wil jouw verblijf optimaal laten verlopen.
            Deze vragenlijst zal hierbij helpen.
          </p>
          <p className="welcome-subsub">
            U kan deze invullen met behulp van een naste familielid om u te
            begeleiden.
          </p>
        </div>
        <div className="landing-next-btn">
          <p className="landing-next-btn-text">Aan de slag!</p>
          <img
            className="landing-next-btn-arrow"
            alt="next button"
            src="/assets/img/arrow-right-white.svg"
          ></img>
        </div>
      </div>
      <div className="landing-right"></div>
    </div>
  );
};
export default LandingContainer;
