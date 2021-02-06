import * as React from "react";
import DetailInterests from "../DetailInterests";

import "./detaileditinterests.css";

const DetailEditInterests = ({ resident }) => {
  return (
    <div className="residents-editinterests">
      <div className="add-new-tag-container">
        <div className="add-new-tag-titles-wrapper">
          <p className="add-new-tag-title">Tag toevoegen</p>
          <p className="add-new-tag-subtext">
            Maak een nieuwe interessetag aan of zoek in de bestaande tags.
          </p>
        </div>
        <div className="add-new-tag-inputs-wrapper">
          <label className="add-new-tag-search label-wrap">
            Zoek een tag
            <input className="add-new-tag-input" type="text"></input>
          </label>
          <label className="add-new-tag-category label-wrap">
            Categorie
            <input className="add-new-tag-input" type="text"></input>
          </label>
        </div>
        <div className="add-new-tag-btn-div">
          <p className="add-new-tag-btn-notice">
            Deze tag bestaat nog niet. Selecteer een passende categorie om deze
            aan te maken
          </p>
          <div className="add-new-tag-btn">
            <p className="add-new-tag-btn-text">Tag creëren</p>
          </div>
        </div>
      </div>
      <DetailInterests resident={resident} interests={resident.interests} />
    </div>
  );
};

export default DetailEditInterests;
