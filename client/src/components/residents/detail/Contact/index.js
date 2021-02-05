import * as React from 'react';
import './contact.css';
import ContactDropdown from '../ContactDropdown';

const Contact = ({ contact, deleteContact }) => {
  const [isDropdownActive, setDropdownActive] = React.useState(false);
  const toggleDropdown = () => setDropdownActive((prevState) => !prevState);

  return (
    <>
      <li className="contact-container">
        <img
          className="contact-pic"
          alt="fototje van contactpersoon"
          src="https://1tsip9tt643kufi0v3m1s4is-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/accessories-for-elderly-women.jpg"
        ></img>
        <div className="contact-info-wrapper">
          <p className="contact-name">{contact.name}</p>
          <div
            className={`contact-type${
              contact.matchedInterests.length > 0
                ? '  contact-type--contact'
                : ''
            }`}
          >
            <p className="contact-type-text">
              {contact.matchedInterests.length > 0 ? 'Match' : 'Vriend'}
            </p>
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
