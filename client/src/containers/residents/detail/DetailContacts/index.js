import * as React from 'react';
import Contact from '../../../../components/residents/detail/Contact';
import { useGlobalState } from '../../../../global-states';
import './detailcontacts.css';

const DetailContacts = ({ resident }) => {
  const { _id, contacts } = resident;

  const [_, setAddNewContact] = useGlobalState('addNewContact');
  const toggleAddNewContact = () => {
    setAddNewContact({
      residentId: _id,
      closeWindow: () => setAddNewContact(null),
    });
  };

  const deleteContact = () => {
    console.log('contact deleted');
  };

  return (
    <>
      <h2 className="visually-hidden">Vriendschappen bewoner</h2>
      <div className="detailresident-contacts fit-height flex-content">
        <h3 className="detailresident-contact-title">Vriendschappen</h3>
        {/* contact lijstje, hier al de component */}
        <ul className="detailresident-contactslist">
          {contacts
            ? contacts.length > 0
              ? contacts.map((contact, index) => (
                  <Contact
                    key={index}
                    contact={contact}
                    deleteContact={deleteContact}
                  />
                ))
              : 'Geen vriendschappen gevonden'
            : contacts === null
            ? 'Geen vriendschappen gevonden'
            : 'Geen vriendschappen gevonden'}
        </ul>

        <div
          onClick={toggleAddNewContact}
          className="detailresident-add-contact-btn"
        >
          <p className="detailresident-add-contact-text">
            Nieuw contactpersoon
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailContacts;
