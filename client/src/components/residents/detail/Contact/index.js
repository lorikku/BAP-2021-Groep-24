import * as React from 'react';
import './contact.css';
import ContactDropdown from '../ContactDropdown';

const Contact = ({ contact, deleteContact }) => {
  const { photoUri, name, matchedInterests } = contact;

  const [isDropdownActive, setDropdownActive] = React.useState(false);
  const toggleDropdown = () => setDropdownActive((prevState) => !prevState);

  return (
    <>
      <li className="contact-container">
        <div className="contact-info-wrapper">
          <img
            className="contact-pic"
            alt="fototje van contactpersoon"
            src={photoUri ? photoUri : '/assets/img/emptystate-profile.svg'}
          ></img>
          <div className="contact-info-subwrapper">
            <p className="contact-name">{name}</p>
            <div
              className={`contact-type${
                matchedInterests.length > 0 ? '  contact-type--contact' : ''
              }`}
            >
              <p className="contact-type-text">
                {matchedInterests.length > 0 ? 'Match' : 'Vriend'}
              </p>
            </div>
          </div>
        </div>
        <div onClick={toggleDropdown} className="contact-info-btn">
          <img
            className="contact-info-btn-vector"
            alt="chevron down icon"
            src={
              isDropdownActive
                ? '/assets/img/chevron-up.svg'
                : '/assets/img/chevron-down.svg'
            }
          ></img>
        </div>
      </li>
      {isDropdownActive ? (
        <ContactDropdown contact={contact} deleteContact={deleteContact} />
      ) : null}
    </>
  );
};

export default Contact;
