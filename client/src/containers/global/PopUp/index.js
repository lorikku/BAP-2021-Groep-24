import * as React from 'react';
import ConfirmDialog from '../../../components/global/ConfirmDialog';
import PopUpContact from '../../residents/detail/PopUpContact';

import './popup.css';

const PopUp = ({ confirmDialog, addNewContact }) => {
  if (confirmDialog || addNewContact) {
    return (
      <div className="popup-container-black">
        {confirmDialog && <ConfirmDialog confirmDialog={confirmDialog} />}
        {addNewContact && <PopUpContact addNewContact={addNewContact}/>}
      </div>
    );
  }

  return null;
};

export default PopUp;
