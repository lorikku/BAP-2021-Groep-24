import * as React from "react";

import "./popupcontact.css";

const PopUpContact = () => {
  return (
    <div className="popup-container">
      <div className="popup-close">
        <p className="popup-close-text">Sluiten</p>
        <img
          className="popup-close-icon"
          alt="X om te sluiten"
          src="/assets/img/X-copyColor.svg"
        ></img>
      </div>
      <div className="popup-left-container">
        <div className="popup-left-title-input-wrapper">
          <p className="popup-left-title">
            Voeg een ander bewoner toe aan<br></br> het netwerk van deze bewoner
          </p>
          <div className="popup-left-input-wrapper">
            <input type="text"></input>
            <div className="popup-left-add-btn">
              <img
                className="popup-left-add-icon"
                alt="een knop om bewoner toe te voegen"
                src="/assets/img/add-user-icon.svg"
              ></img>
            </div>
          </div>
        </div>
        <div className="popup-left-vector">
          <p>Hier komt illustratie</p>
        </div>
      </div>
      <div className="popup-right-container">
        <div className="popup-right-wrapper">
          <p className="popup-right-title">
            Vind een bewoner met gemeenschappelijke interesses
          </p>
          <div className="popup-right-match-btn">
            <p className="popup-right-btn-text">Matching</p>
            <img
              className="popup-right-btn-icon"
              alt="matching icoon"
              src="/assets/img/matching-white.svg"
            ></img>
          </div>
        </div>
        <div className="popup-right-vector">
          <p>Hier komt illustratie</p>
        </div>
      </div>
    </div>
  );
};

export default PopUpContact;
