import * as React from 'react';
import './selectedints.css';
import Tag from '../../../components/interests/Tag';
import {detailSteps} from '../../../pages/ActivitiesPages/detailSteps';

const SelectedInts = ({
  selectedInterests,
  toggleInterest,
  submitActivity,
  step,
}) => {
  // IF SUBMITACTIVITY IS DEFINED -> we are on activity page
  return (
    <div
      className={`match-header-right${
        submitActivity ? ' match-header-right--activity' : ''
      }`}
    >
      <p className="match-header-right-title">Geselecteerde Interesses</p>
      <ul className="match-header-right-tags">
        {selectedInterests.length === 0 ? (
          <p></p>
        ) : (
          selectedInterests.map((interest, index) => (
            <Tag
              key={index}
              interest={interest}
              isEdit
              toggleInterest={toggleInterest}
            />
          ))
        )}
      </ul>
      {submitActivity ? (
        <div
          onClick={
            selectedInterests.length === 0 || step === detailSteps.SUBMITTING
              ? null
              : submitActivity
          }
          className={`newactivity-one-next-btn newactivity-one-next-btn--int${
            selectedInterests.length === 0 || step === detailSteps.SUBMITTING
              ? ' newactivity-one-next-btn--invalid'
              : ''
          }`}
        >
          <p className="newactivity-one-next-btn-text">Activiteit aanmaken</p>
          <img
            className="newactivity-one-next-arrow"
            alt="next arrow naar rechts"
            src="/assets/img/arrow-right-white.svg"
          ></img>
        </div>
      ) : null}
    </div>
  );
};

export default SelectedInts;
