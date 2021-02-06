import * as React from "react";
import Tag from "../../../components/interests/Tag";
import "./matchresult.css";

const MatchResult = ({ name }) => {
  return (
    <li className="result-head-container">
      <div className="result-head-top-container">
        <div className="main-info-wrapper">
          <div className="result-head-percentage">
            <p className="result-top-match">Top Match</p>
            <div className="result-circle">
              <p className="result-percentage">85%</p>
            </div>
          </div>

          <div className="match-user-wrapper">
            <img
              className="match-user-pic"
              alt="edit icoon"
              src="https://www.pngitem.com/pimgs/m/208-2085309_old-woman-png-stock-photo-old-lady-transparent.png"
            ></img>
            <p className="result-name">
              Mathilda <br></br> Dejonckheere
            </p>
          </div>
        </div>
        <div className="result-add-btn">
          <img
            className="add-icon"
            alt="add icon"
            src="/assets/img/add-user-blue.svg"
          ></img>
          <p className="result-add-btn-text">Voeg toe aan profiel</p>
        </div>
      </div>
      <div className="result-head-bottom-container">
        <img
          className="result-head-chevronleft"
          alt="chevron links"
          src="/assets/img/chevron-left.svg"
        ></img>
        <ul className="result-head-tags">
          <Tag name={"Golf"} />
          <Tag name={"Bakken"} />
          <Tag name={"Het Laatste Nieuws"} />
          <Tag name={"Petanque"} />
        </ul>
        <img
          className="result-head-chevronright"
          alt="chevron rechts"
          src="/assets/img/chevron-right.svg"
        ></img>
      </div>
    </li>
  );
};
export default MatchResult;
