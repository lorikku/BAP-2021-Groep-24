import * as React from "react";
import Tag from "../Tag";
import "./interestscategory.css";

const InterestsCategory = () => {
  return (
    <li className="interests-category-container">
      <div className="interests-category">
        <div className="category-vector">
          <p>
            Deze tekst is <br></br> een placeholder
          </p>
        </div>

        <p className="interests-category-name">
          Muzikale <br></br> Activiteiten
        </p>
      </div>
      <ul className="interest-tags">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </ul>
    </li>
  );
};

export default InterestsCategory;
