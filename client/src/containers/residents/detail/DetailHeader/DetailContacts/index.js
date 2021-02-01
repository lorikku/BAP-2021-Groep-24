import * as React from "react";
import Contact from "../../../../../components/resident/resident/Contact";
import "./detailcontacts.css";

const DetailContacts = () => {
  return (
    <>
      <h2 className="visually-hidden">Contactpersonen bewoner</h2>
      <div className="detailresident-contacts">
        <h3 className="detailresident-contact-title">Contactpersonen</h3>
        {/* contact lijstje, hier al de component */}
        <Contact
          name={{ first: "Mathilda", last: "Dejonckheere" }}
          type={"Match"}
        />
                <Contact
          name={{ first: "Mathilda", last: "Dejonckheere" }}
          type={"Match"}
        />
                <Contact
          name={{ first: "Mathilda", last: "Dejonckheere" }}
          type={"Match"}
        />
                <Contact
          name={{ first: "Mathilda", last: "Dejonckheere" }}
          type={"Match"}
        />
        
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
