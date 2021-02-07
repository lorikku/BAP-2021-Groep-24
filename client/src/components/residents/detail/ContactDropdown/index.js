import * as React from 'react';
import './contactdropdown.css';
import Tag from '../../../interests/Tag';
import { useGlobalState } from '../../../../global/states';
import { format } from 'date-format-parse';
import { locale } from '../../../../global/timeStampFuncs';

const ContactDropdown = ({ contact, deleteContact }) => {
  const { matchedInterests } = contact;

  //Global state for handling the confirm dialog
  const [, setConfirmDialog] = useGlobalState('confirmDialog');

  const confirmDeletion = () => {
    const dialog = {
      //Text to show
      dialogText: `Wil je ${
        contact.name.split(' ')[0]
      } uit de vriendschappen verwijderen?`,

      //Confirm text and onClick callback
      confirm: {
        text: 'Verwijder',
        callback: () => {
          deleteContact();
          setConfirmDialog(null);
        },
      },

      //Confirm text and onClick callback
      cancel: {
        text: 'Annuleren',
        callback: () => {
          setConfirmDialog(null);
        },
      },
    };

    setConfirmDialog(dialog);
  };

  return (
    <li className="contact-dropdown">
      <div className="contact-dropdown-grid">
        <img
          onClick={confirmDeletion}
          className="delete-contact-icon"
          alt="vuilbakje"
          src="/assets/img/trash-square.svg"
        ></img>
        <div className="dropdown-title-wrapper">
          <p className="dropdown-title">Match gemaakt op:</p>
          <p className="dropdown-subtitle">
            {format(new Date(contact.addedAt * 1000 /* convert sec to ms */), 'D MMMM YYYY', {
              locale,
            })}
          </p>
        </div>
      </div>
      {/* alleen bij match --> */}
      {matchedInterests.length > 0 ? (
        <div className="dropdown-tags-container">
          <p className="dropdown-tags-title">Gematched op</p>
          <ul className="dropdown-tags-list">
            {matchedInterests.map((interest, index) => (
              <Tag key={index} interest={interest} />
            ))}
          </ul>
        </div>
      ) : null}
      {/* <--- */}
    </li>
  );
};

export default ContactDropdown;
