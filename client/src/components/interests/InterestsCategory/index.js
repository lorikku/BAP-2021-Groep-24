import * as React from 'react';
import Tag from '../Tag';
import './interestscategory.css';

const InterestsCategory = ({
  category,
  isEdit,
  //Matching page
  isMatchingPage,
  selectedInterests,
  toggleInterest,
}) => {
  return (
    <li className="interests-category-container">
      <div className="interests-category">
        <div className="category-vector"></div>

        <p className="interests-category-name">{category.name}</p>
      </div>
      <ul className="interest-tags">
        {category.interests.map((interest, index) => (
          <Tag
            key={index}
            interest={interest}
            isEdit={isEdit}

            selectedInterests={selectedInterests}
            toggleInterest={toggleInterest}
            isMatchingPage={isMatchingPage}
          />
        ))}
      </ul>
    </li>
  );
};

export default InterestsCategory;
