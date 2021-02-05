import * as React from 'react';

import './confirmdialog.css';

const ConfirmDialog = ({ confirmDialog }) => {
  const { dialogText, cancel, confirm } = confirmDialog;
  return (
    <div className="confirm-container">
      <p className="confirm-text">{dialogText}</p>

      <div className="confirm-buttons">
        <div onClick={confirm.callback} className="cancel-btn">
          <p className="cancel-btn-text">{confirm.text}</p>
        </div>
        <div onClick={cancel.callback} className="confirm-btn">
          <p className="confirm-btn-text">{cancel.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
