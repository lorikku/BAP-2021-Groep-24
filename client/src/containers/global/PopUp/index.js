import * as React from 'react';
import { useLocation } from 'react-router-dom';
import ConfirmDialog from '../../../components/global/ConfirmDialog';
import { useGlobalState } from '../../../global/states';
import PopUpContact from '../../residents/detail/PopUpContact';

import './popup.css';

const PopUp = () => {
  const path = useLocation();

  //Global state that handles the popups
  const [confirmDialog, setConfirmDialog] = useGlobalState('confirmDialog');
  const [addNewResident, setAddNewResident] = useGlobalState('addNewResident');

  //When path changes => remove any active dialogs
  React.useEffect(() => {
    setConfirmDialog(null);
    setAddNewResident(null);
  }, [path, setConfirmDialog, setAddNewResident]);

  if (confirmDialog || addNewResident) {
    return (
      <div className="popup-container-black">
        {confirmDialog && <ConfirmDialog confirmDialog={confirmDialog} />}
        {addNewResident && <PopUpContact addNewResident={addNewResident} />}
      </div>
    );
  }

  return null;
};

export default PopUp;
