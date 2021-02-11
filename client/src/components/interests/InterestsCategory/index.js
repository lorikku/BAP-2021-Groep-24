import * as React from 'react';
import { categories } from '../../../global/categoriesAndDependencies';
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
  const { name, icon, color } = categories[category._id];

  return (
    <li className="interests-category-container">
      <div className="interests-category" style={{ backgroundColor: color }}>
        <img
          src={icon}
          alt="Icoontje voor categorie"
          className="category-vector"
        />

        <p className="interests-category-name">{name}</p>
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
