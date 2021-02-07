import * as React from 'react';
import './selectedints.css';
import Tag from '../../../components/interests/Tag';

const SelectedInts = ({ selectedInterests, toggleInterest }) => {
  return (
    <div className="match-header-right">
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
    </div>
  );
};

export default SelectedInts;
