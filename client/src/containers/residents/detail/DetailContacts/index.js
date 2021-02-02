import * as React from 'react';
import Contact from '../../../../components/residents/detail/Contact';
import './detailcontacts.css';

const DetailContacts = () => {
  return (
    <>
      <h2 className="visually-hidden">Contactpersonen bewoner</h2>
      <div className="detailresident-contacts fit-height flex-content">
        <h3 className="detailresident-contact-title">Contactpersonen</h3>
        {/* contact lijstje, hier al de component */}
        <ul className="detailresident-contactslist">
          <Contact
            name={{ first: 'Mathilda', last: 'Dejonckheere' }}
            type={'Match'}
          />
          <Contact
            name={{ first: 'Mathilda', last: 'Dejonckheere' }}
            type={'Match'}
          />
          <Contact
            name={{ first: 'Mathilda', last: 'Dejonckheere' }}
            type={'Match'}
          />
          <Contact
            name={{ first: 'Mathilda', last: 'Dejonckheere' }}
            type={'Match'}
          />
          <Contact
            name={{ first: 'Mathilda', last: 'Dejonckheere' }}
            type={'Match'}
          />
          <Contact
            name={{ first: 'Mathilda', last: 'Dejonckheere' }}
            type={'Match'}
          />
          <Contact
            name={{ first: 'Mathilda', last: 'Dejonckheere' }}
            type={'Match'}
          />
          <Contact
            name={{ first: 'Mathilda', last: 'Dejonckheere' }}
            type={'Match'}
          />
          <Contact
            name={{ first: 'Mathilda', last: 'Dejonckheere' }}
            type={'Match'}
          />
          <Contact
            name={{ first: 'Mathilda', last: 'Dejonckheere' }}
            type={'Match'}
          />
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