import * as React from 'react';
import Contact from '../../../../components/residents/detail/Contact';
import { useGlobalState } from '../../../../global/states';
import { deleteContactFromResident } from '../../../../services/ResidentsService/index.js';
import './detailcontacts.css';

const DetailContacts = ({ resident }) => {
  const { contacts } = resident;

  //Global access of resident (and setting it)
  const [, setResident] = useGlobalState('resident');
  //Popup dialog
  const [, setAddNewContact] = useGlobalState('addNewContact');

  const toggleAddNewContact = () => {
    setAddNewContact({
      residentId: resident._id,
      closeWindow: () => setAddNewContact(null),
    });
  };

  let contactLoading = false;
  const deleteContact = async (contactId) => {
    if (contactLoading) {
      return;
    }

    contactLoading = true;

    const succes = await deleteContactFromResident(resident._id, contactId);

    if (succes) {
      //setResident to newResident with updated contacts
      setResident((prevState) => {
        const newResident = Object.assign({}, prevState);

        const index = newResident.contacts.findIndex(
          (contact) => contact._id === contactId
        );
        newResident.contacts.splice(index, 1);
        return newResident;
      });
    }

    contactLoading = false;
  };

  return (
    <>
      <h2 className="visually-hidden">Vriendschappen bewoner</h2>
      <div className="detailresident-contacts fit-height flex-content">
        <h3 className="detailresident-contact-title">Vriendschappen</h3>
        {/* contact lijstje, hier al de component */}
        <ul className="detailresident-contactslist">
          {contacts.length > 0
            ? contacts.map((contact, index) => (
                <Contact
                  key={index}
                  contact={contact}
                  deleteContact={() => deleteContact(contact._id)}
                />
              ))
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
