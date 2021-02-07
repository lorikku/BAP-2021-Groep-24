import * as React from 'react';
import Tag from '../../../components/interests/Tag';
import { postContact } from '../../../services/ResidentsService/ContactsService';
import './matchresult.css';

const MatchResult = ({ matchee, match }) => {
  const { percentage, resident, matchedInterests } = match;

  const [addedContact, setAddedContact] = React.useState(false);

  let loadingAddContact = false;
  const addContactToProfile = async () => {
    if (loadingAddContact) return;
    //So that the 'add to contacts button' cant be spammed
    loadingAddContact = true;

    const succes = await postContact(matchee, match.resident, matchedInterests);
    setAddedContact(succes); //If succes is true -> contact added

    loadingAddContact = false;
  };

  return (
    <li className="result-head-container">
      <div className="result-head-top-container">
        <div className="main-info-wrapper">
          <div className="result-head-percentage">
            <p className="result-top-match">Top Match</p>
            <div className="result-circle">
              <p className="result-percentage">{percentage}%</p>
            </div>
          </div>

          <div className="match-user-wrapper">
            <img
              className="match-user-pic"
              alt="bewoner foto"
              src={
                resident.photoUri
                  ? resident.photoUri
                  : '/assets/img/emptystate-profile.svg'
              }
            ></img>
            <p className="result-name">{resident.name}</p>
          </div>
        </div>
        <div
          onClick={!addedContact ? addContactToProfile : null}
          className={`result-add-btn${
            addedContact ? ' result-add-btn--active' : ''
          }`}
        >
          <img
            className="add-icon"
            alt="add icon"
            src={
              addedContact
                ? '/assets/img/match-white.svg'
                : '/assets/img/add-user-blue.svg'
            }
          ></img>
          <p
            className={`result-add-btn-text${
              addedContact ? ' result-add-btn-text--active' : ''
            }`}
          >
            {addedContact ? 'Toegevoegd!' : 'Voeg toe aan profiel'}
          </p>
        </div>
      </div>
      <div className="result-head-bottom-container">
        <img
          className="result-head-chevronleft"
          alt="chevron links"
          src="/assets/img/chevron-left.svg"
        ></img>
        <ul className="result-head-tags">
          {matchedInterests.map((matchedInterest, index) => (
            <Tag key={index} interest={matchedInterest} />
          ))}
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
