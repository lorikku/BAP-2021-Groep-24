import * as React from "react";
import Tag from "../../../components/interests/Tag";
import "./matchresult.css";

const MatchResult = ({ name }) => {
  return (
    <div className="match-result-container">
      <div className="match-user">
        <div className="match-user-wrapper">
          <img
            className="match-user-pic"
            alt="foto bewoner"
            src="https://st3.depositphotos.com/1606463/17951/i/1600/depositphotos_179510558-stock-photo-smiling-old-man.jpg"
          ></img>
          <p className="match-user-name">
            {name.first} <br></br>
            {name.last}
          </p>
        </div>
        <div className="match-user-btn">
          <img
            className="match-user-icon"
            alt="bewoner toevoegen icoon"
            src="/assets/img/add-user-blue.svg"
          ></img>
          <p className="match-user-btn-text">Voeg toe aan profiel</p>
        </div>
      </div>
      <div className="match-percent">
        <p className="match-percent-title">Top Match</p>
        <div className="match-percent-circle">
          <p className="match-percent-amount">85%</p>
        </div>
      </div>
      <div className="match-ints">
        <p className="match-ints-title">
          {name.first} heeft deze gelijke interesses:
        </p>
        <ul className="match-ints-list">
          <Tag name={"Pop Smoke"} />
          <Tag name={"Pop Smoke"} />
          <Tag name={"Pop Smoke"} />
          <Tag name={"Pop Smoke"} />
          <Tag name={"Pop Smoke"} />
          <Tag name={"Pop Smoke"} />
          <Tag name={"Pop Smoke"} />
          <Tag name={"Pop Smoke"} />
          <Tag name={"Pop Smoke"} />
        </ul>
      </div>
    </div>
  );
};
export default MatchResult;
