import * as React from "react";

import "./confirmdialog.css";

const ConfirmDialog = ({ dialogText }) => {
  return (
    <div className="confirm-container-black">
      <div className="confirm-container">
        <p className="confirm-text">{dialogText}</p>

        <div className="confirm-buttons">
          <div className="cancel-btn">
            <p className="cancel-btn-text">Annuleren</p>
          </div>
          <div className="confirm-btn">
            <p className="confirm-btn-text">Verwijderen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
