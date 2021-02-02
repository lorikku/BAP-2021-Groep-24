import * as React from 'react';
import Contact from '../../../../components/residents/detail/Contact';
import './detailcontacts.css';

const DetailContacts = ({ contacts }) => {
  return (
    <>
      <h2 className="visually-hidden">Contactpersonen bewoner</h2>
      <div className="detailresident-contacts fit-height flex-content">
        <h3 className="detailresident-contact-title">Contactpersonen</h3>
        {/* contact lijstje, hier al de component */}
        <ul className="detailresident-contactslist">
          {contacts.map((contact, index) => (
            <Contact key={index} contact={contact} />
          ))}
        </ul>

        <div className="detailresident-add-contact-btn">
          <p className="detailresident-add-contact-text">
            Nieuw contactpersoon
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailContacts;
